require("dotenv").config()
const { EMAIL_PASSWORD, EMAIL } = process.env
const nodemailer = require("nodemailer")


module.exports = {
  passwordReset: async (req, res) => {
    const { loginEmail, message } = req.body

    console.log(loginEmail, typeof loginEmail)

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
      to: loginEmail,
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

  }
}