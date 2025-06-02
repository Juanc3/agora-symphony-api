import express from 'express';
import { getBuildToken, startTranscription } from '../services/agoraService.js';

const router = express.Router();

router.post('/start', async (req, res) => {
  try {
    console.log("start transcription");
    const appId = process.env.AGORA_APP_ID;
    const data = await getBuildToken(appId || '');
    console.log("data", data);
    const result = await startTranscription(appId, data.tokenName);
    res.json(result);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Error starting transcription' });
  }
});

router.get('/get-build-token', async (req, res) => {
try {
  console.log("get build token");
    const data = await getBuildToken(appId || '');
    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Error getting build token' });
  }
});

export default router;