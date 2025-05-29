import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const managedServiceClient = axios.create({
  baseURL: 'https://managedservices-prod.rteappbuilder.com',
  headers: {
    'X-Project-ID': process.env.AGORA_APP_ID,
    'Content-Type': 'application/json',
  },
});

export default managedServiceClient;
