
const taskOne = function(){

    return new Promise(function(resolve, reject){
        resolve(`task 1 is completed`);
    })
}

const taskTwo = function(){
    return new Promise(function(resolve, reject){
        
        setTimeout(function(){
            resolve(`task 2 is completed`);
        }, 2000)
    })
}

const taskThree = function(){
    return new Promise(function(resolve, reject){
        reject(`task 3 is not completed`);
    })
}

const taskFour = function(){
    return new Promise(function(resolve, reject){
        resolve(`task 4 is completed`);
    })
}

// taskOne().then(function(res){
//     console.log(res);
// }).then(taskTwo).then(function(res){
//     console.log(res);
// }).then(taskThree).then(function(res){
//     console.log(res);
// }).then(taskFour).then(function(res){
//     console.log(res);
// }).catch(function(err){
//     console.log(err);
// })

async function runAllTasks(){

    try{

        const t1 = await taskOne();
        console.log(t1);

        const t2 = await taskTwo();
        console.log(t2);

        const t3 = await taskThree();
        console.log(t3);

        const t4 = await taskFour();
        console.log(t4);

    }catch(err){
        
        console.log(err);
    }
    
}

runAllTasks();