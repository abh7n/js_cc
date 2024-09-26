// arrays of objects

const todos = [
    {
        id : 1 ,
        text : 'Meet with friends' ,
        isCompleted : true 
    }
     ,
    {
        id : 2 ,
        text : 'Go to gym' ,
        isCompleted : true 
    } 
     ,
    {
        id : 3 ,
        text : 'Go to Cinema Theatre' ,
        isCompleted : false 
    } 
]

// console.log(todos[1].text)

// json format

//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON)

for (let i=0; i<todos.length; i++) {
    console.log(todos[i].text);
}

for (let name of todos)
{
    console.log(name.text)
}