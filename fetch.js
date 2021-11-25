console.log(100000);
console.log(20000);
setTimeout(()=>console.log("aaaaa"),5000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
console.log(40000);
console.log(50000);