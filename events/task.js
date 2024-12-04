const EventEmitter = require("events");

const emitter = new  EventEmitter();

const eventCounts ={
      "use-login":1,
      "user-logout":1,
      "user-purchase":1,
      "profile-update":1,
};


emitter.on("user-login", (username)=>{
      eventCounts["use-login"]++;
      console.log(`${username} logged in!`);
});

emitter.on("user-purchase", (username,item)=>{
      eventCounts["user-purchase"]++;
      console.log(`${username} purchase ${item}!`);
});

emitter.on("profile-update", (username,field)=>{
      eventCounts["profile-update"]++;
      console.log(`${username} update their ${field}!`);
});

emitter.on("user-logout", (username)=>{
      eventCounts["user-logout"]++;
      console.log(`${username} logged out!`);
});


emitter.on("summary", ()=>{
      console.log(eventCounts);
});

emitter.emit("user-login", "Chetan");
emitter.emit("user-purchase", "Chetan", "Laptop");
emitter.emit("profile-update", "Chetan" ,"email");
emitter.emit("user-logout", "thapa");

emitter.emit("summary");