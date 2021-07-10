// ========== TYPE BOOLEAN ========== //

//           ALERT !!!          //
/* Boolean != boolean
   Boolean: type object
   boolean: type: primitive

   recommendable: boolean for applications
*/

// => example one

let taskCompleted: boolean = true;
let pendingTtask: boolean = false;

console.log(taskCompleted);
console.log(pendingTtask);

// => example two

let done: boolean = false;
    if(done){
        console.log("The task has been completed!!!");
    }else{
        console.log("Task not completed");
    }