var express = require("express");
var zoeken = express.Router();

zoeken.get("/zoeken", function(request, response) {
  var volledigUrl = request.protocol + '://' + request.get('host') + request.originalUrl;
    var zoekterm = volledigUrl.split('=', 2);
    // splitsen op + en vervangen door spatie want als er spatie getypt wordt wordt deze weergegeven als +
    // response.send("Jij wil zoeken op zoekterm '" + zoekterm[1].split('+').join(' ') + "' is het niet?");

    var zoektermDef = zoekterm[1].split('+').join(' ');

    console.log("test"+ zoekterm);

    if (zoeken !== "") {
      response.render("zoekenDisplay", {
        zoekenDiaplay: zoeken,
        zoekterm: ("U hebt gezocht op " + zoekterm[1].split('+').join(' '))
      });
    } else {
      response.render("404", {});
    }

});

module.exports = zoeken;
