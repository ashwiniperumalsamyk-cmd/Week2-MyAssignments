function getUserData(callback){ //takes a callback
    setTimeout(function(){
        callback(); //calls the call back function
    },3000); //waits for 3 seconds
}
getUserData(function(){
    console.log("Call Back Function"); //print the call back function
});
