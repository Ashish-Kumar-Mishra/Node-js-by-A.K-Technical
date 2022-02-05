// const name="Ashish";
// console.log(name);
const fs = require("fs");
// creating a new file
//  fs.writeFileSync('read.txt', "welcome to my channel");

//  fs.writeFileSync('read.txt', "Ashish technical ,welcome to my channel");

// fs.appendFileSync("read.txt","how are u i am fine thank u :)")


// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

// Node.js includes an additional data type called Buffer
//(not available in browser javascript.)
// buffer is mainly used to store binary data,
// while reading from a file or receiving  packets over the network.
/* <Buffer 41 73 68 69 73 68 20 74 65 63 68 6e 69 63 61 6c 20 2c 77 65 6c 63 6f 6d 65 20 74 6f 20 6d
79 20 63 68 61 6e 6e 65 6c 0d 0a 0d 0a 68 6f 77 20 61 72 65 ... 23 more bytes */

// const buf_data = fs.readFileSync("read.txt");

// org_data=buf_data.toString();
// console.log(org_data);

//to rename a file

fs.renameSync("read.txt","readwrite.txt");


