// Write a function that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater
// than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is
// rejected.
// Call the function and print the resolve and reject in a .then,
// .catch.

const func =(num)=>{

    return new Promise((res,rej)=>
    {
        if(num>10){
            res("Yes");
        }
        else{
            rej("No");
        }
    }
    );
}

isGraterFromTen(11).then((res)=> console.log(res)).catch((res)=> console.log(res));
isGraterFromTen(5).then((res)=> console.log(res)).catch((res)=> console.log(res));