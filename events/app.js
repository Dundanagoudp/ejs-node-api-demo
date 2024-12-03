const EventEmitter = require ('events');

// create an instance
const emitter =new  EventEmitter();

// // 1 define an event listener
// emitter.on('greet', ()=>{
//       console.log("hello chetan patil")
// })

// // 2 Trigger(emit) the "greet" event 

// emitter.emit("greet")

// greet()

//  arugyment pass
emitter.on('greet', (arg)=>{
      console.log(`hello ${arg.username} , you are ${arg.prof}`);
})


emitter.emit("greet", {username:"chetan patil", prof:"full stack web"});
