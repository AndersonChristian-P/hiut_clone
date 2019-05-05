const bcrypt = require("bcryptjs")

module.exports = {
  getUsers: (req, res) => {
    const db = req.app.get("db")
    db.getUsers()
      .then(results => {
        res.status(200).send(results)
      })
    console.log(req.session)
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
      email,
      hash
    })

    session.user = {
      email,
      hash,
      user_id: user_id[0].user_id
    }

    console.log(session.user)

    res.sendStatus(200)
  }

} 