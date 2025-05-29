import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const customerKey = process.env.AGORA_CUSTOMER_ID;
const customerSecret = process.env.AGORA_CUSTOMER_SECRET;
const encodedCredential = Buffer.from(`${customerKey}:${customerSecret}`).toString('base64');

const agoraClient = axios.create({
  baseURL: 'https://api.agora.io',
  headers: {
    Authorization: `Basic ${encodedCredential}`,
    'Content-Type': 'application/json',
  },
});

export default agoraClient;
