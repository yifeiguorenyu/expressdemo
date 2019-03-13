var express =require("express")
var app =express()
var fs =require("fs")
app.get("/deleteUser",(req,res)=>{
    fs.readFile(__dirname+"/"+"a.json","utf8",(err,data)=>{
        data= JSON.parse(data)
        delete data["user"+2]
        console.log(data)
        res.end(JSON.stringify(data))
    })
})
app.listen(8081)


