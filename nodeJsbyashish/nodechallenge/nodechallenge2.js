//challenge Time

// 1: create a floder  name it thapa 
// 2: create a file name it bio.txt and data into it.
//3: add more data into the file at the end of exiting data
//4:read the data without getting the buffer data at first.
// file encoding
//5:rename thre file name to mybio.txt
//6:now delete both the file and folder
// CRUD
// create
// update
// read 
// Delete


const fs=require('fs');
// fs.mkdir("Ashish",(err)=>{
//     console.log("folder created")
// });

// fs.writeFile("./Ashish/bio1.txt","my name is ashish kumar mishra ",(err)=>{
//     console.log("files created");
// });

// fs.appendFile("./Ashish/bio1.txt","I like to play cricket and big fan of MS dhoni ",(err)=>{
//     console.log("files data appended");
// });

// fs.readFile("./Ashish/bio1.txt",'utf-8',(err,data)=>{
//     console.log(data);
// });

// fs.rename("./Ashish/bio1.txt","./Ashish/bio2.txt",(err)=>{
//     console.log("rename done");
// })

// fs.unlink("./Ashish/bio2.txt",(err)=>{
//     console.log("file delete");
// })

fs.rmdir("./Ashish",(err)=>{
         console.log("folder delete");
     })