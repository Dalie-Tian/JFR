var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer();
server.listen(8000);
server.on('request', (req, res) => {
  var objUrl = url.parse(req.url, true);
  // res.end(objUrl.pathname);
  if (objUrl.pathname == "/" || objUrl.pathname == "/index") {
    fs.readFile("./ym/index.html", (err, buf) => {
      // console.log(buf);
      res.end(buf);
    })
  } else if (objUrl.pathname == "/ziye" ) {
    fs.readFile("./ym/ziye_01.html", (err, buf) => {
      // console.log(buf);
      res.end(buf);
    })
  } 
  else if (objUrl.pathname.split(".")[1] == "css") {
    fs.readFile(".//" + objUrl.pathname.split(".")[0] + "." + objUrl.pathname.split(".")[1], (err, buf) => {
      res.end(buf);
      // console.log(buf.toString());
    })
  }
  else if (objUrl.pathname.split(".")[1] == "js") {
    fs.readFile(".//" + objUrl.pathname.split(".")[0] + "." + objUrl.pathname.split(".")[1], (err, buf) => {
      res.end(buf);
    })
  } else if (objUrl.pathname.split(".")[1] == "jpg" || objUrl.pathname.split(".")[1] == "png") {
    fs.readFile(".//" + objUrl.pathname.split(".")[0] + "." + objUrl.pathname.split(".")[1], (err, buf) => {
      res.end(buf);
    })
  }
});
console.log("服务器开启");