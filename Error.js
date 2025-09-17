//compile time error

// //syntax error
// console.log(1;

//run time error
//reference error
// console.log(x);


//error handling: try-catch block 

try{
    console.log("try block starts here");
    console.log(x);
    console.log("try block ends here");

}
catch(e){
    //define: what you have to do with the error
    //retry logic
    //fallback mechanism
    //custom error
    //logging 

    console.log("i am inside catch block")
    console.log("your error is here:",e);
}
finally{
    console.log("i will run everytime");
}


//finally block: this will run everytime

