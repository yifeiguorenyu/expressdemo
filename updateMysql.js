var mysql =require("mysql")
var connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123",
    port:"3306",
    database:"school"
})
connection.connect()

var modSql ="UPDATE stu SET name = ? ,gender =? WHERE id = ?";
var modSqlParams =["薛林","女","1"]
connection.query(modSql,modSqlParams,function(err,result){
    if(err){
        console.log("[UPDATE ERROR]",err.message)
        return
    }
    console.log("-----------")
    console.log("UPDATE AFFECTEROWS ",result.affectedRows)
    console.log("---------------")
})
    connection.end()







