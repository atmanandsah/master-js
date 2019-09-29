var array = [];
var  s = prompt("what do you like to do?");

while(s !== "quit"){
    if(s == "new"){
        var data = prompt("Enter the new todo!");
        array.push(data);
    }
    else if(s == "list"){
        console.log(array);
    }
    var  s = prompt("what do you like to do?");
}
console.log("quit the app");