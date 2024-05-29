
const promise1 = new Promise(function(resolve, reject){

    let flag  = true;

    if(flag){
        resolve("completed promise 1");
    }
    else{
        reject("not completed promise 1!");
    }
});

const promise2 = new Promise(function(resolve, reject){

    let flag = true;

    setTimeout(function(){

        if(flag) resolve("completed promise 2");
        else reject("not completed promise 2!")
    },1000)
})


promise1.then(function(value){
    console.log(value);
})
.catch(function(err){
    console.log(err);
});

promise2.then(function(value){
    console.log(value);
})
.catch(function(err){
    console.log(err);
});

Promise.all([promise1, promise2]).then(function(res){
    console.log(res);
});

Promise.race([promise1, promise2]).then(function(res){
    console.log("race: ")
    console.log(res);
})