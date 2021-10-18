let managerRunning = true;
// let tasks = `Charge MacBook` + "\n" + `Master JavaScript`;
let tasks = [`Charge MacBook`, `Master JavaScript`];
var listOfTasks = [];
let newTask;
let removeTask;
let userEntry;
let num = 1;
const menuMessage = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager

`

while (managerRunning){
    userEntry = prompt(menuMessage);
    while (true){
        if (userEntry === "TASKS"){
            alert(tasks);
            // for(items of tasks){
            //     alert(`${num}: ${items}`);
            // }
            break;
        }
        if (userEntry === "NEW"){
            newTask = prompt(`Please enter a new task`)
            tasks = tasks.concat("\n" + `${newTask}`);
            alert(`"${newTask}" has been added`);
            break;
        }
        if (userEntry === "REMOVE"){
            removeTask = prompt("Please enter a task to remove");
            break;
        }
        if (userEntry === "CLOSE"){
            alert("Thank you for using Task Manager!");
            managerRunning = false;
            break;
        }
        if (userEntry !== "TASKS" || userEntry !== "NEW" || userEntry !== "REMOVE" || userEntry !== "CLOSE"){
            break;
        }
    }
}