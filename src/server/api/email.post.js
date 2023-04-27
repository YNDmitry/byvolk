import { mailOptions, transporter } from '~/config/nodemailer.config'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    const data = await transporter.sendMail({
      ...mailOptions,
      subject: body.subject,
      html: body.html
    })
    return data
  } catch (error) {
    // eslint-disable-next-line
    return console.log(error)
  }
})
