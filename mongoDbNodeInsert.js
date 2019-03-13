var MongoClient =require("mongodb").MongoClient
var url ="mongodb://localhost:27017/"
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo =db.db("test")
    var myobj={name:'薛云飞',url:"湖北"}
    dbo.collection("site").insertOne(myobj,(err,res)=>{
        if(err)throw err;
        console.log("文档插入成功")
        db.close()
    })
})





