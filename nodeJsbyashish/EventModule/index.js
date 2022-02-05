// Events module
// Node.js has a builtinModules,called "events"
// example 1-registering for the event to be fired only one time 
// example 2-create an event emitter instance a couple of callbacks
// example 3-registering for the event with parameters

// module fs,os,path,http








// const event =require("events")
// const event =new event.EventEmitter();
const { ENGINE_METHOD_PKEY_ASN1_METHS } = require("constants");
const EventEmitter=require("events");
const { builtinModules } = require("module");
const { emit } = require("process");
const event =new EventEmitter();

// event .emit("sayMyName");not work
/*event.on("sayMyName",()=>{
    console.log("u name is ashish");
});
event.on("sayMyName",()=>{
    console.log("u name is kumar");
});
event.on("sayMyName",()=>{
    console.log("u name is mishra");
});

event .emit("sayMyName");*/

// the concept is quite simple: emitter objects emit named events that cause previously registered 
// listener  to be called.So,an emitter object basically has two main features:
//1: emitting name events
// registering and unregistering listener function.

event.on("checkPage",(sc,msg)=>{
console.log(`status code is ${sc} and page is ok${msg}`);
})
event .emit("checkPage",200,"ok");



