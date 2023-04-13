import nextConnect from "next-connect";
import multer from "multer";
import path from "path";
import connectDB from "../../../config/db";
import { createTransport } from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import nodemailer from "nodemailer";

import { File, Web3Storage } from "web3.storage";

import CV from "../../../models/cvModel";

export const config = {
  api: {
    bodyParser: false,
  },
};

const w3storage = new Web3Storage({ token: process.env.WEB3_STORAGE_TOKEN });

function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /doc|docx|pdf|odf/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Documents Only!");
  }
}

const storage = multer.memoryStorage({
  fileFilter: function (_req, file, cb) {
    checkFileType(file, cb);
  },
});

const maxSize = 3 * 1000 * 1000;

const upload = multer({ storage: storage, limits: { fileSize: maxSize } });

const createCV = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
})
  .use(upload.single("cvfile"))
  .post(async (req, res) => {
    // @desc Create a new cv
    // @route POST /api/cvs/addcv
    // @access Public
    await connectDB();

    try {
      const {
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        state,
        zip,
        usEligible,
        dob,
        description,
      } = req.body;

      console.log(req.body, req.file);

      let cid = null;

      if(req?.file) {
        const newFile = new File([req.file.buffer], req.file.originalname);
         cid = await w3storage.put([newFile]);
      }

      // const newFile = new File([req.file.buffer], req.file.originalname);
      // const cid = await w3storage.put([newFile]);
      

      const cv = await CV.create({
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        state,
        zip,
        usEligible,
        dob,
        description,
        fileUrl: cid
          ? `https://${cid}.ipfs.dweb.link/${req.file.originalname} `
          : null,
      });

      // Create a nodemailer transport using SMTP
      const transport = nodemailer.createTransport(
        smtpTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          secure: false,
          auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
          },
        })
      );
      // Create an email message
      const message = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "New form submission",
        text: JSON.stringify(cv, null, 2),
      };

      // Send the email
      transport.sendMail(message, (err, info) => {
        if (err) {
          console.log("Error occurred. " + err.message);
          res.status(500).send("Error Sending email");
        } else {
          console.log(info);
          res.status(200).send("Email sent successfully");
        }
      });
      return res.status(201).json(cv);

      // res.status(201).json({ body: req.body, file: req.file });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error.message });
    }
  });

export default createCV;
