var MongoClient =require("mongodb").MongoClient
var url ="mongodb://localhost:27017/test"

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    console.log("数据库已穿件")
    var dbase =db.db("test")
    dbase.createCollection("site",(err,res)=>{
        if(err) throw err
        console.log("创建集合")
        db.close()
    })

    
})





