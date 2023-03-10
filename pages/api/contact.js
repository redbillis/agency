import { transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || data.email || data.subject || data.message) {
      return res.status(400).json({ message: "Bad Request" });
    }
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      text: "This is a test string",
      html: `
        <h1>Test Title</h1>
        <p>Some body text</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }

  return res.status(400).json({ message: "Bad Request" });

  // if (req.method !== "POST") {
  //   res.status(405).json({ message: `Method ${req.method} is not allowed` });
  //   return;
  // }

  // const { name, email, subject, message } = req.body;

  // if (
  //   name.trim() === "" ||
  //   email.trim() === "" ||
  //   subject.trim() === "" ||
  //   message.trim() === ""
  // ) {
  //   res.status(422).json({ message: "Invalid input data" });
  //   return;
  // }

  // let nodemailer = require("nodemailer");
  // const transporter = nodemailer.createTransport({
  //   port: 465,
  //   host: "mail.mykonoskosmoplazhotel.gr",
  //   auth: {
  //     user: process.env.EMAIL,
  //     pass: process.env.PASSWORD,
  //   },
  //   secure: true,
  // });

  // const mailData = {
  //   from: process.env.EMAIL,
  //   to: "info@kosmoplaz.gr", // kosmoplaz main email for messages
  //   subject: `Message from ${name}`,
  //   text: message,
  //   html: `<div>
  //       <h2>Θέμα: ${subject}</h2>
  //       <h3>Όνομα: ${name}</h3>
  //       <p>Email: ${email}</p>
  //       <p>Μήνυμα${message}</p>
  //     </div>`,
  // };

  // transporter.sendMail(mailData, (err) => {
  //   if (err) res.status(500).json({ message: "Something went wrong" });
  //   else res.status(200).json({ message: "OK" });
  // });
};

export default handler;
