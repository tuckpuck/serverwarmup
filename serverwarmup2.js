var express = require('express');
var app = express();

app.listen(8000, function() {
  console.log("listening on 8000.");
});

app.use(express.static("public"));

app.get("/:poop", sfunction(req, res) {
  if(req.params.poop === "api") {
    res.send("hello from api");
  } else {
    res.status(404);
    res.send("404 Not Found. We are stupid");
  }
})
