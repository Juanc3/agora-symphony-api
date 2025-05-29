import express from 'express';
import { getAuthToken, getBuildToken, startTranscription } from '../services/agoraService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const result = await getAuthToken(req.body.user);
    res.json(result);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Error starting transcription' });
  }
});

router.post('/refresh', async (req, res) => {
  try {
    const result = await refreshToken();
    res.json(result);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Error refreshing token' });
  }
});

router.post('/logout', async (req, res) => {
  try {
    const result = await logout();
    res.json(result);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Error logging out' });
  }
});
export default router;