const { Router } = require("express");
const messages = require("../messages");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", (req, res) => {
  const { userName, messageText } = req.body;
  messages.push({
    text: messageText,
    user: userName,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = newRouter;
