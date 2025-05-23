require('dotenv').config();
const express = require('express');
const { ChatGPTAPI } = require('chatgpt');

const router = express.Router();

const api = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await api.sendMessage(prompt);
    res.status(200).json({ text: response.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'OpenAI request failed' });
  }
});

module.exports = router;
