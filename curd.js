var mysql =require("mysql")
var connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123",
    port:"3306",
    database:"school"
})
connection.connect()
var sql ="SELECT * FROM stu";
connection.query(sql,function(err,result){
    if(err){
        console.log("SELECT ERROR",err.message)
        return
    }
    console.log("---------") 
    console.log(result) 
    console.log("---------") 
    connection.end()
})
