var MongoClient =require("mongodb").MongoClient
var url ="mongodb://localhost:27017/"
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo= db.db("test")
    var myObj=[
        { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
        { name: 'Google', url: 'https://www.google.com', type: 'en'},
        { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
    ];

    dbo.collection("site").insertMany(myObj,(err,res)=>{
        if(err) throw err;
        console.log("插入的文档数量为",res.insertedCount)
        db.close()
    })
})






