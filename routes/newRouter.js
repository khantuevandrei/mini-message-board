const { Router } = require("express");
const messagesController = require("../controllers/messagesController");

const newRouter = Router();

newRouter.get("/", messagesController.newMessageGet);

newRouter.post("/", messagesController.newMessagePost);

module.exports = newRouter;
