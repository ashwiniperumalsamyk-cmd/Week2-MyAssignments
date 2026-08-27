
function sumNumbers(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
        console.log(i+"->" +sum);
    }
    return sum;

}
const result =sumNumbers(5);
console.log("Final Sum:", result);