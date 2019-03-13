var MongoClient =require("mongodb").MongoClient
var url ="mongodb://localhost:27017/"
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo =db.db("test")
    var whereStr ={"url":"湖北"}
   var  updateStr ={$set:{"name":"易飞易飞"}}
    dbo.collection("site").updateOne(whereStr,updateStr,(err,res)=>{
        if(err) throw err;
        console.log("文档更新成功")
        db.close()
    })

})








