// arrays of objects

const todos = [
    {
        id : 1 ,
        text : 'Meet with friends' ,
        isCompleted : true 
    }
     ,
    {
        id : 1 ,
        text : 'Go to gym' ,
        isCompleted : true 
    } 
     ,
    {
        id : 1 ,
        text : 'Go to Cinema Theatre' ,
        isCompleted : false 
    } 
]

// console.log(todos[1].text)

// json format

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)