var mysql =require("mysql")
var connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123",
    port:'3306',
    database:"school"
})
connection.connect()
var delSql ="DELETE FROM stu where id = 1"

connection.query(delSql,(err,result)=>{
    if(err){
        console.log("[DELETE ERROR]",err.message)
        return
    }

    console.log("11-------")
    console.log("DELETE AFFFECTEDOWS",result.affectedRows)
    console.log("11000000000")
})







