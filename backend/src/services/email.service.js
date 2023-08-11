const nodemailer = require('nodemailer');
const config = require('../config/config');
const logger = require('../config/logger');
const Handlebars = require('handlebars');

const transport = nodemailer.createTransport(config.email.smtp);
/* istanbul ignore next */
if (config.env !== 'test') {
  transport
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));
}

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @param {string} html (optional)
 * @returns {Promise}
 */
const sendEmail = async (to, subject, text, html = undefined) => {
  const msg = { from: config.email.from, to, subject, text, html: html ? `<div>${html}</div>` : undefined };
  await transport.sendMail(msg);
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to, token) => {
  const subject = 'Reset password';
  const resetPasswordUrl = `localhost/auth/reset-password?token=${token}`;
  const text = `Dear user,
To reset your password, click on this link: ${resetPasswordUrl}
If you did not request any password resets, then ignore this email.`;
  const template = `
    <div>
      <p>Dear user,</p>
      <p>To reset your password, click on this link: <a href="{{resetPasswordUrl}}">RESET PASSWORD</a></p>
      <p>If you did not request any password resets, then ignore this email.</p>
    </div>
  `;

  const compiledTemplate = Handlebars.compile(template);
  const html = compiledTemplate({ resetPasswordUrl });

  await sendEmail(to, subject, text, html);
};

/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to, token) => {
  const subject = 'Email Verification';
  // replace this url with the link to the email verification page of your front-end app
  const verificationEmailUrl = `http://link-to-app/verify-email?token=${token}`;
  const text = `Dear user,
To verify your email, click on this link: ${verificationEmailUrl}
If you did not create an account, then ignore this email.`;
  await sendEmail(to, subject, text);
};

const sendSuccessfulJobApplicationEmail = async (to, name) => {
  const subject = "Job application submitted";
  const text = `Dear ${name}, your job application has been successfully submitted.`;
  const html = `
    <div>
      <p>Dear <b>${name}</b>,</p>
      <p>Your job application has been successfully submitted.</p>
      <p>Thank you for applying.</p>
    </div>
  `;
  await sendEmail(to, subject, text, html);
};

module.exports = {
  transport,
  sendEmail,
  sendResetPasswordEmail,
  sendVerificationEmail,
  sendSuccessfulJobApplicationEmail,
};
