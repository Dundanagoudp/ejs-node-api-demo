import readline from "readline";

const rl = readline.createInterface({
      input: process.stdin,
      output:process.stdout
});

// empty array

const todos = [];

const showMenu =()=>{
      console.log("\n1: Add a Task");
      console.log("2: view Tasks");
      console.log("3:Exit");
      rl.question("choose an option:", handleInput);     
};

// call back fuction

const handleInput = (option)=>{
      if(option ==="1"){
            rl.question("eneter a task", (task)=>{
                 todos.push(task); 
                 console.log("task added :", task);
                 showMenu();  
            })
      }      else if(option ==="2"){
            console.log("\n Todo Lists");
            todos.forEach((task, index)=>{
                  console.log(`${index+1}.${task}`);                
            })
            showMenu();           
      } else if(option === "3"){
            console.log('good bye');
            rl.close();

      }else {
            console.log("invalid option please try again");
            showMenu();
      }

}

showMenu();
