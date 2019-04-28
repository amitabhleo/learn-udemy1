//async javascript using setTimeout
//This uses the folloing:
//when Call Stack sees setTimout it pushes it to Web API and clears the Call Stack 
//Call stack is first in Last out


//Call Stack

//Web API

//Callback Queue

//Event Loop

console.log('1');
setTimeout(() => {
 console.log('2'); 
}, 2000);
console.log('3');