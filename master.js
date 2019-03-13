const fs = require("fs");
const child_proess = require("child_process");

for (var i = 0; i < 3; i++) {
  var workerProecess = child_proess.exec(
    "node support.js " + i,
    (error, stdout, stderr) => {
      if (error) {
        console.log(error.stack);
        console.log("error code" + error.code);
        console.log("signal received" + error.signal);
      }
      console.log("stdout" + stdout);
      console.log("stderr" + stderr);
    }
  );
  workerProecess.on("exit",(code)=>{
    console.log("子进程已退出,退出码"+code)
  })
}
