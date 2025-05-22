const express = require('express');
const router = express.Router();
const Conversation = require('../models/Conversation');

router.post('/', async (req, res) => {
  const { userId } = req.body;

  try {
    const newConversation = new Conversation({
      participants: [userId, 'ai'],  // hardcode AI as a participant
      messages: []
    });

    await newConversation.save();
    res.status(201).json(newConversation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create conversation' });
  }
});

// GET /api/conversation/:userId
router.get('/:userId', async (req, res) => {
  try {
    const conversations = await Conversation.find({
      participants: req.params.userId
    }).populate('participants');

    res.status(200).json(conversations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch conversations' });
  }
});

module.exports = router;
