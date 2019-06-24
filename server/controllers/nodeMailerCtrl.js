require("dotenv").config()
const { EMAIL_PASSWORD, EMAIL } = process.env
const nodemailer = require("nodemailer")

module.exports = {
  passwordReset: async (req, res) => {
    const { forgotPasswordEmail: email, message } = req.body

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
      subject: 'Reset Password Request - Hiut Clone',
      html: `<p style="font-family: 'Tinos', serif; font-size: 14px;">Hello user at 
      <a style="text-decoration: none; color: black;">${email}</a>!</p>
      <p style="font-family: 'Tinos', serif; font-size: 14px;">We got a request that you wanted to reset your password.</p>
      <p style="color: #C61B21; font-weight: 700; font-family: 'Tinos', serif; font-size: 14px; font-style: italic;">Please click here to continue.</p>`,
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