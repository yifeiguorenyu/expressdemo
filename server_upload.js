var express = require("express");
var app = express();
var fs = require("fs");

var bodyParser = require("body-parser");
var multer = require("multer");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: "/tmp/" }).array("image"));

app.get("/index_upload.html", (req, res) => {
  res.sendFile(__dirname+"/"+"index_upload.html")
});

app.post("/file_upload",(req,res)=>{
  var des_file = __dirname + "/" + req.files[0].originalname;
  fs.readFile(req.files[0].path, function(err, data) {
    if (err) return console.log(err);
    fs.writeFile(des_file, data, err => {
      if (err) {
        console.log(err);
      } else {
        response = {
          message: "File uploader succesfully",
          filename: req.files[0].originalname
        };
      }
      console.log(response)
      res.end(JSON.stringify(response))
    });
  });
})



var server = app.listen(8081, () => {
  var port = server.address().port;
  var address = server.address().address;
  console.log("当前实例运行在", port, address);
});
