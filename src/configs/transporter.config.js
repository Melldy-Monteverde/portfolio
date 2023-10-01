import 'dotenv/config'
const nodemailer = require('nodemailer')

const configTesting = {
  host: process.env.TESTING_SMTP_HOST,
  port: process.env.TESTING_SMTP_PORT,
  auth: {
    user: process.env.TESTING_SMTP_USER,
    pass: process.env.TESTING_SMTP_PASS
  }
}

export const createTestTransport = () => {
  let transport = nodemailer.createTransport(configTesting)
  return transport
}

const configGmail = {
  host: process.env.GMAIL_SMTP_HOST,
  port: process.env.GMAIL_SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.GMAIL_SMTP_USER,
    pass: process.env.GMAIL_SMTP_PASS
  }
}

export const createTransportGmail = () => {
  let transport = nodemailer.createTransport(configGmail);
  return transport
}
