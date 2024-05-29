
function sq(x) {
    console.log(`square of the ${x} = ${x*x}`);
}
function higherOrderFunction(num, callback){
    callback(num);
}
const y = sq;
y(6);

higherOrderFunction(5, y);


//implementing call back function for the previous code

const testOne = (callback) => {
    console.log("Task 1");
    callback();
}
const dataLoading = () => {
    console.log("Task 2 loading");
}

const testTwo = (callback) => {
    setTimeout(function(){
        dataLoading();
        callback();
    }, 0)
}
const testThree = (callback) => {
    console.log("Task 3");
    callback();
}
const testFour = () => {
    console.log("Task 4");
}

testOne(function(){
    testTwo(function(){
        testThree(function(){
            testFour();
        });
    });
});

console.log("Hii");

document.querySelector("button").addEventListener("click", function(){
    console.log("button is clicked");
});

console.log("Bye");