import express from 'express';
import dotenv from 'dotenv';
import transcriptionRoutes from './app/routes/transcription.js';
import authRoutes from './app/routes/auth.js';

const app = express()

dotenv.config();

const port = 3000

app.use('/auth', authRoutes);

app.use('/transcription', transcriptionRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
