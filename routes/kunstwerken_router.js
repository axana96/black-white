var express = require("express");
var kunstwerken = express.Router();

kunstwerken.get('/kunstwerken/:id', function(req, res) {
  var kunstFile = req.app.get('kunstFile');
  var id = req.params.id;
  var teller = 0;
  var kunstwerken = "";
  while (teller < kunstFile.kunstwerken.length ) {
    if (kunstFile.kunstwerken[teller].id == id) {
      kunstwerken = kunstFile.kunstwerken[teller];
    }
    teller++;
  }
  if (kunstwerken !== "") {
    res.render("kunstwerken", {
      kunstwerken: kunstwerken
    });
  } else {
    res.render("404", {});
  }
});

module.exports = kunstwerken;
