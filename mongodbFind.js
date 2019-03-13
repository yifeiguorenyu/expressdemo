var MongoClient =require("mongodb").MongoClient
var url ="mongodb://localhost:27017/"
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo=db.db("test")
    dbo.collection("site").find({}).toArray((err,res)=>{
        if(err) throw err;
        console.log(res)
        db.close()
    })


})
