var express =require("express")
var app =express()
var fs =require("fs")

app.get("/:id",(req,res)=>{
    fs.readFile(__dirname+"/"+"a.json","utf8",(err,data)=>{
        data =JSON.parse(data)
        var user = data["user"+req.params.id]
        console.log(user)
        res.end(JSON.stringify(user))
    })
})
app.listen(8081)