console.log("first");
// setInterval(()=>{
//     console.log("third")
// },5000)
let seconds =0;
const interval = setInterval(()=>{
    seconds++;
    console.log(++seconds);
    if(seconds>15){
        setInterval(interval);
    }
})
console.log("second");