const bcrypt = require("bcryptjs")

module.exports = {
  getUsers: (req, res) => {
    const db = req.app.get("db")
    db.getUsers()
      .then(results => {
        res.status(200).send(results)
      })
  },

  register: async (req, res) => {
    const db = req.app.get("db")
    const { firstname, lastname, email, password } = req.body
    const { session } = req
    let emailTaken = await db.checkEmail({ email })
    emailTaken = +emailTaken[0].count

    if (emailTaken !== 0) {
      return res.sendStatus(409)
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const user = await db.registerUser({
      firstname,
      lastname,
      email,
      hash
    })

    session.user = {
      email,
      user_id: user[0].login_id
    }
    res.status(200).send({ authenticated: true, email: user[0].email, firstname: user[0].firstname, lastname: user[0].lastname, user_id: user[0].login_id })
  },

  login: async (req, res) => {
    const db = req.app.get("db")
    const { session } = req
    const { loginEmail: email } = req.body

    try {
      let user = await db.login({ email })
      session.user = {
        email: user[0].email,
        user_id: user[0].login_id,
        authenticated: true,
        firstname: user[0].firstname,
        lastname: user[0].lastname
      }
      const authenticated = bcrypt.compareSync(req.body.loginPassword, user[0].password)
      if (authenticated) {
        res.status(200).send({ authenticated, user_id: user[0].login_id, firstname: user[0].firstname, lastname: user[0].lastname, email: user[0].email })
      } else {
        throw new Error(401)
      }
    } catch (err) {
      res.sendStatus(401)
    }
  },

  getAddresses: async (req, res) => {
    const db = req.app.get("db")
    const { session } = req
    const { userId: id } = req.params

    try {
      const data = await db.getUserAddresses({ id })

      session.user.address = data[0]

      res.status(200).send({ validAddress: true, street: data[0].street, city: data[0].city, state: data[0].state, zip: data[0].zip, firstname: data[0].firstname, lastname: data[0].lastname })
    } catch (err) {
      res.sendStatus(404)
    }
  },

  addAddress: async (req, res) => {
    const db = req.app.get("db")
    const { session } = req
    const { userId } = req.params
    const id = +userId
    const { street, city, state, zip } = req.body

    try {
      const data = await db.addUserAddress({
        street,
        city,
        state,
        zip,
        id
      })

      session.user.address = {
        street,
        city,
        state,
        zip,
        address_id: data[0].address_id
      }

      res.sendStatus(200)
    } catch (err) {
      res.sendStatus(400)
    }
  },

  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  },

  getSession: async (req, res) => {
    try {
      await res.status(200).send(req.session)
    } catch (err) {
      res.sendStatus(400)
    }
  }
}