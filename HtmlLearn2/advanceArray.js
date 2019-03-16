//javaScript old style
var sandwitches = ['tuna','ham','cheese','bmt'];
sandwitches.forEach(function(sandwitch,index){
    console.log(index);
    console.log(sandwitch);
});

//Advance ECMAScript Arrays forEach

const array = [1,3,5,6,8];

const double = [];

const newArray = array.forEach((num) => {
    double.push(num *2);
})
console.log(double);


//Advance ECMAScript Arrays Map, Filler, Reduce



