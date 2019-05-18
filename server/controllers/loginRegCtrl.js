const bcrypt = require("bcryptjs")

module.exports = {
  getUsers: (req, res) => {
    console.log("THIS IS THE CART", req.session.cart)
    console.log("THIS IS THE USER.SESSION", req.session)
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
      // hash,
      user_id: user[0].login_id
    }
    // console.log("registered", session.user)
    // res.sendStatus(200)
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
    // const id = +userId
    console.log("THIS IS THE GET ADDRESS USER ID:", id, typeof id)
    // const { user_id: id } = session.user 

    try {
      const data = await db.getUserAddresses({ id })
      // console.log("THIS IS THE DATA", data)
      session.user.address = data[0]
      console.log("this is the address on session", session.user.address)

      console.log("THIS IS THE CART ON SESSION", req.session.user.cart)


      res.status(200).send({ validAddress: true, street: data[0].street, city: data[0].city, state: data[0].state, zip: data[0].zip, firstname: data[0].firstname, lastname: data[0].lastname })

      // res.status(200).send(data[0])
      // put ability to select ship to address on the back burner so currently only the first address inputted is ever returned
    } catch (err) {
      console.log("THIS IS THE ERROR", err)
      res.sendStatus(404)
    }
  },

  addAddress: async (req, res) => {
    const db = req.app.get("db")
    const { session } = req
    const { userId } = req.params
    const id = +userId
    // const { user_id: id } = session.user
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
      // console.log("add address", session.user)

      res.sendStatus(200)
    } catch (err) {
      res.sendStatus(400)
    }
  },

  logout: (req, res) => {
    req.session.destroy()
    // console.log(req.session)
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

// the idea I have for address is if user selects a difference shipping address on the client side it changes the address on req.session.user

// the base process is that if a user adds an address to the book it is automatically selected as the ship to address