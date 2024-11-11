import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

// Enviar 'index.html' para cualquier ruta no manejada por archivos estáticos
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send-email', async (req, res) => {
  const { nombre, apellido, telefono, comentario, email } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'juandomingozarate5@gmail.com', 
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${nombre}\nApellido: ${apellido}\nTeléfono: ${telefono}\nComentario: ${comentario}\nEmail del remitente: ${email}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email enviado' });
  } catch (error) {
   
    res.status(500).json({ message: 'Failed to send email' });
  }
});





