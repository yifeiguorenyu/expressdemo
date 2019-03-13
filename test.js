var mysql =require("mysql")
var connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123",
    database:"school"
})
connection.connect()
connection.query("SELECT 1+1 AS solution",(err,results,fields)=>{
    if(err) throw err;
    console.log("The solution is :",results[0].solution)
})