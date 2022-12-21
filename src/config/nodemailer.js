import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
})

export const mailOptions = {
  from: `<${process.env.EMAIL}>`,
  to: process.env.EMAIL
}

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});