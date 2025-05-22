// models/Conversation.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text:     { type: String, required: true }
}, { timestamps: true });

const fileSchema = new mongoose.Schema({
  url:  String,
  name: String,
  type: String,
  size: Number
});

const conversationSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  messages:     [messageSchema],
  files:        [fileSchema]
}, { timestamps: true });

module.exports = mongoose.model('Conversation', conversationSchema);
