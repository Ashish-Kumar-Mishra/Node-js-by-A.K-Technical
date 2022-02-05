const fs = require("fs");
const { Server } = require("http");
const { json } = require("stream/consumers");

const bioData={
    name:"ashish",
    age:26,
    channel :"ashish technical",
};

// JSON stands for Javascript Object Notation 
// JSON is a lightweight format for storing and transporting data
// JSON is often used when data is sent from a Server



/*
// console.log(bioData.channel);
// console.log(bioData.name);

// {"name":"ashish","age":26,"channel":"ashish technical"}
const jsonData=JSON.stringify(bioData);
// console.log(jsonData.channel);//  undefined caN'T CALL DIRECTLY

const objData=JSON.parse(jsonData);
// { name: 'ashish', age: 26, channel: 'ashish technical' }
console.log(objData);
console.log(objData.channel);
*/

// 1:convert to JSON
// 2:dusre file me add krdena
// 3:readfile
// 4:again convert back to js obj original
// 5:console.log


const jsonData=JSON.stringify(bioData);
fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done");
})
fs.readFile("json1.json","utf-8",(err,data)=>{
 console.log(data);//{"name":"ashish","age":26,"channel":"ashish technical"} 

const orgData=JSON.parse(data);
console.log(orgData);
// { name: 'ashish', age: 26, channel: 'ashish technical' }
})
