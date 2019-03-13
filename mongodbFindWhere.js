var MongoClient =require("mongodb").MongoClient
var url ="mongodb://localhost:27017/"
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo = db.db("test")
    var whereStr ={"name":"菜鸟工具"}
    dbo.collection("site").find(whereStr).toArray((err,res)=>{
        if(err) throw err;
        console.log(res)
        db.close()
    })
})










