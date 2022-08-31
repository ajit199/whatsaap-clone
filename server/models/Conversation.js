const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    name: String,
    friendname: String,
    members: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
