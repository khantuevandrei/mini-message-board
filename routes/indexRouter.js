const { Router } = require("express");
const messages = require("../messages");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/:indexId", (req, res) => {
  const { indexId } = req.params;
  res.render("message", {
    id: indexId,
    text: messages[indexId].text,
    user: messages[indexId].user,
    added: messages[indexId].added,
  });
});

module.exports = indexRouter;
