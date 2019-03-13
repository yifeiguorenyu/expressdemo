var MongoClient =require("mongodb").MongoClient;
var url ="mongodb://localhost:27017/test"
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    console.log("数据库已穿件")
    db.close()
})