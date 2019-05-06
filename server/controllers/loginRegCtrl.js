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

    const user_id = await db.registerUser({
      firstname,
      lastname,
      email
      // ,hash
    })

    session.user = {
      email,
      // hash,
      login_id: user_id[0].user_id
    }
    res.sendStatus(200)
  },

  login: async (req, res) => {
    const db = req.app.get("db")
    const { session } = req
    const { loginEmail: email } = req.body

    try {
      let user = await db.login({ email })
      session.user = user[0]
      const authenticated = bcrypt.compareSync(req.body.loginPassword, user[0].password)
      if (authenticated) {
        res.status(200).send({ authenticated, user_id: user[0].login_id })
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
    const { login_id: id } = session.user

    try {
      const data = await db.getUserAddresses({ id })
      res.status(200).send(data[0])
    } catch (err) {
      res.sendStatus(404)
    }
  },

  addAddress: async (req, res) => {
    const db = req.app.get("db")
    const { session } = req
    const { login_id: id } = session.user
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

      console.log(session.user)

      res.sendStatus(200)
    } catch (err) {
      res.sendStatus(400)
    }
  }
}

// the idea I have for address is if user selects a difference shipping address on the client side it changes the address on req.session.user

// the base process is that if a user adds an address to the book it is automatically selected as the ship to address