
const testOne = () => {
    console.log("Task 1");
}
const dataLoading = () => {
    console.log("Task 2");
}

const testTwo = () => {
    setTimeout(function(){
        dataLoading();
    }, 0)
}
const testThree = () => {
    console.log("Task 3");
}
const testFour = () => {
    console.log("Task 4");
}
testOne();
testTwo();
testThree();
testFour();