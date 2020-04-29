var express = require("express");
var router = express.Router();
var Tab = require("../models/Tabs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("./cors");

router.use(bodyParser.json());

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
  // res.setHeader("Content-Type", "application/json");
  // res.statusCode = 200;
  // Tab.find({})
  //   .sort({ createdAt: -1 })
  //   .then(chat => {
  //     console.log(chat);
  //       if (chat === []) {
  //         socket.emit("Tabs", []);
  //       } else {
  //         socket.emit("Tabs", chat.Tabs[0]);
  //       }
  //   });
});

module.exports = function(io) {
  io.on("connection", function(socket) {
    Tab.find({})
      .sort({ createdAt: -1 })
      .then(chat => {
        console.log(chat);
        if (Object.keys(chat).length === 0) {
          socket.emit("Tabs", []);
        } else {
          socket.emit("Tabs", chat[0].Tabs);
        }
      });

    socket.on("Tabs", data => {
      console.log(socket.id + " : " + JSON.stringify(data));
      socket.broadcast.emit("Tabs", data);
      let Tabs__ = new Tab({ Tabs: data });
      Tabs__.save();
    });
  });

  return router;
};
