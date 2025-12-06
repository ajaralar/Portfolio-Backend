import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVICE_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

export const sendContactEmail = async (data) => {
    try {
        const fullName = `${data.fname} ${data.lname}`;
        const mailOptions = {
            from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_MINE,
            replyTo: `${data.email}`,
            subject: `[Portfolio Connect] New Message: ${data.subject}`,
            html: `
                <h3>Contact Form Submission</h3>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${data.message}</p>
            `,
        }

        const info = await transporter.sendMail(mailOptions)
        console.log("Email sent successfully: ", info.response)
        return true
    } catch (error) {
        console.error("Error sending email:", error)
        return false
    }
}