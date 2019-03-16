const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90){
    let wizardLevel = true;
    console.log("inside",wizardLevel);
}
console.log("outside",wizardLevel);

//arrow function

function add(a,b){
    return a+b;
}

const add2 =(a,b) => a+b;