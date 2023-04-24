import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: 587,
  auth: {
    user: process.env.NUXT_EMAIL,
    pass: process.env.NUXT_EMAIL_PASS
  }
})

export const mailOptions = {
  from: `<${process.env.NUXT_EMAIL}>`,
  to: process.env.NUXT_EMAIL
}

transporter.verify(function (error, success) {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take our email messages')
  }
})
