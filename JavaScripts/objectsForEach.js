// Also learning for of and for in iteration below

let obj = {
    userName0: 'Rupert',
    userName1: 'Murdoc',
    userName2: 'Subhash'
};

//Using Object.values

Object.values(obj).forEach(value => {
    console.log(value);
});

Object.entries(obj).forEach(value => {
    console.log(value);
});

Object.entries(obj).map(value => {
    return value[1];
});

//for of - used for arrays and strings
//iterating

let basket = ['apples','pear','grapes'];

for (items of basket){
    console.log(items);
}


//for in  - properties objects 
//this is enumerating

let fruitBasket = {
    apples: 5,
    pears: 10,
    grapes:100
};

for (lists in fruitBasket){
    console.log(lists);
}


