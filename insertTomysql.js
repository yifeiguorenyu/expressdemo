var mysql =require("mysql")

var connection =mysql.createConnection({
    host :'localhost',
    user:'root',
    password:"123",
    port:'3306',
    database:'school'
})
connection.connect()

var addSql ="INSERT INTO STU(id,name,gender) VALUES(null,?,?)"
var addSqlParams =["郭仁宇","男"]
connection.query(addSql,addSqlParams,(err,result)=>{
    if(err){
        console.log("[INSERT ERROR]",err.message)
        return
    }
    console.log("----------------")
    console.log("INSERT ID:",result)
    console.log("----------------")
})
connection.end()

