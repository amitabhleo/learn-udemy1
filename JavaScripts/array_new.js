const array = [1,3,5,7,9];
const double =[];
const newArray = array.forEach((num )=> {
    //console.log(''num);
    double.push(num *2);
});

console.log('foreach',double);

//using mapArray expanded

/*const mapArray = array.map ((num) => {
return num *2 ;
});
*/
//shorter way

const mapArray = array.map (num =>  num * 2);

console.log('map',mapArray);

//filter Array

const filterArray = array.filter ((num) => {
    return num >5});

    console.log('filter',filterArray);