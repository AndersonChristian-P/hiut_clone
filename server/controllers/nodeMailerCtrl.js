require("dotenv").config()
const { EMAIL_PASSWORD, EMAIL } = process.env
const nodemailer = require("nodemailer")


module.exports = {
  passwordReset: async (req, res) => {
    const { forgotPasswordEmail: email, message } = req.body

    console.log(email, typeof email)

    console.log(message, typeof message)

    const transporter = await nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD
      }
    })

    let mailOptions = {
      from: '"Charley Andrews" <hiutclone@gmail.com>',
      to: email,
      subject: 'Reset Password - Hiut Clone',
      text: message
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      } else {
        console.log("The info was sent")
        console.log("THIS IS THE INFO", info)
      }
    })

    res.sendStatus(200)
  }
}