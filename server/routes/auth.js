const authRouter = require("express").Router();
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
authRouter.post("/add", async (req, res) => {
  try {
    let isSaved = await Conversation.findOne({
      members: { $all: req.body.members },
    });
    if (isSaved) {
      isSaved.name = req.body.name;
      isSaved.friendname = req.body.friendname;
      return res.status(200).json(isSaved);
    }
    // let conversation = await Conversation.create(req.body);
    // res.status(201).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
});

// authRouter.get("/:conversationId", async (req, res) => {
//   try {
//     let messages = await Message.find({
//       conversationId: req.params.conversationId,
//     });
//     res.status(200).json(messages);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

module.exports = authRouter;
