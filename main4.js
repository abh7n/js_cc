// arrays - variables that hold multiple values 

 const fruits = ['apples' , 'oranges' , 'pears' , 'rambutan']
 console.log(fruits);


// to select a specify element in an array

console.log(fruits['1']);


// to add an element to an existing array

 fruits.push('mangoes');
 console.log(fruits);



// to add an element to the 0th position of an arrray

 fruits.unshift('mangoes');
 console.log(fruits);


// to remove last element in an array

 fruits.pop();
 console.log(fruits);


// to check the condition that it is an array 

 console.log(Array.isArray(fruits)) 


// to check the index of elements in an array

console.log(fruits.indexOf('pears'))