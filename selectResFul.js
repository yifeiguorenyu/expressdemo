var express = require("express")
var app =express()
var fs =require("fs")
app.get("/listUsers",(req,res)=>{
    fs.readFile(__dirname+"/"+"a.json","utf8",(err,data)=>{
        console.log(data)
        res.end(data)
    })
})

var server=app.listen(8081,()=>{
    var port =server.address().port
    var address =server.address().address
    console.log("当前应用实例",port,address)
})