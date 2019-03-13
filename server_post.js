var express =require("express")
var app =express()
var bodyParser =require("body-parser")
var urlencodeParser = bodyParser.urlencoded({extended:false})
app.use(express.static("public"))
app.get("/index_post.html",(req,res)=>{
    res.sendFile(__dirname+"/"+"index_post.html")
})
app.post("/process_post",urlencodeParser,(req,res)=>{
    var response={
        "first_name":req.body.first_name,
        "last_name":req.body.Last_name
    }
    res.send(JSON.stringify(response))
})



var server=app.listen(8081,()=>{
    var port =server.address().port
    var address = server.address().address
    console.log("当前实例运行在",port,address)
})






