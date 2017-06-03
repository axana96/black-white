var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    kunstwerken: req.app.get('kunstFile').kunstwerken,
    categorieen: req.app.get('categorieenFile').categorieen
  });
});

module.exports = root;
