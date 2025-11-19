const db = require("../db/queries");

async function messagesListGet(req, res) {
  const messages = await db.getAllMessages();

  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
}

async function newMessageGet(req, res) {
  res.render("form");
}

async function newMessagePost(req, res) {
  const { username, messageText } = req.body;
  await db.insertNewMessage(username, messageText, new Date());
  res.redirect("/");
}

module.exports = {
  messagesListGet,
  newMessageGet,
  newMessagePost,
};
