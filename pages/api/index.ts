// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  success: boolean;
  message: string;
};

declare var process: {
  env: {
    MAILER_BOT: string;
    PASSWORD: string;
    TO: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const { firstName, lastName, email, comment } = req.body;
        if (
          email &&
          firstName &&
          lastName &&
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ) {
          const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
              user: process.env.MAILER_BOT,
              pass: process.env.PASSWORD,
            },
            secure: true,
          });
          await new Promise((resolve, reject) => {
            transporter.verify(function (error, success) {
              if (error) {
                reject(error);
              } else {
                resolve(success);
              }
            });
          });
          const mailData = {
            from: process.env.MAILER_BOT,
            to: process.env.TO,
            subject: `Message from ${email}`,
            text: comment + " | Sent from " + email,
            html: `<div>${comment}</div><p>Sent from: ${email}</p>`,
          };
          await new Promise((resolve, reject) => {
            transporter.sendMail(mailData, (err, info) => {
              if (err) {
                reject(err);
              } else {
                resolve(info);
              }
            });
          });

          return res
            .status(200)
            .json({ success: true, message: "Mail sent successfully." });
        } else {
          return res
            .status(400)
            .json({ success: false, message: "Input is invalid" });
        }
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Something went wrong on the server.",
        });
      }
      break;

    default:
      break;
  }
}
