// All requird Import elements
import nodemailer from 'nodemailer';
// Create Send Email for your
export const SendEmail = async (to, subject, msg) =>{

    try {
        let transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
              user: "rkmoviesite@gmail.com",
              pass: "cboxejyyzfbhwnjq"
            }
          });

          transport.sendMail({
            from    : 'rkmoviesite@gmail.com',
            to      : to,
            subject : subject,
            text : msg
          });
        
    } catch (error) {
        console.log(error);
    }

}