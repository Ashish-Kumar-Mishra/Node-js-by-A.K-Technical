const fs=require("fs");

// fs.writeFile("read2.txt","Today is Awesome day:)",(err) => {  // callback function
// console.log("files is created");
// console.log(err);
// });



//we can  them a function as an argument- a callback-
//that gets called when that task completes
// the callback has an argument that tells you whether
// the operation completed successfully.
// now we need to say what to do when fs.writeFile
// has completed(even if it's nothing), and  start
//  checking for errors  


// fs.appendFile("read3.txt","plz like and subscribe",(err)=>{
// console.log("task completed");
// })


fs.readFile("read2.txt","utf-8",(err,data)=>{
console.log(data);
})