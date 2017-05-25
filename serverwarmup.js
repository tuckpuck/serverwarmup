var express = require('express');
var app = express();
var port = 6969;

app.listen(port, function(){
  console.log(`listening on ${port}`);
});

app.get("/api", function(req, res) {
  res.send("Hello from API");
});
