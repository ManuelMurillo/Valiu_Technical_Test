var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = function(io) {

  io.on("connection", function(socket) {
    socket.emit("Tabs", []);
    socket.on("Tabs", data => {
      console.log(socket.id + " : " + JSON.stringify(data));
      socket.broadcast.emit("Tabs", data);
    });
  });

  return router;
};
