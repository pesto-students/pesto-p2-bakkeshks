function doTask1() {                                            // dotask1 function which return the promise after 2 second
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Task1 completed after 2 seconds');
        }, 2000);
    });
}

function doTask2() {                                            // dotask2 function which return the promise after 3 second
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Task2 completed  after 3 seconds');
        }, 3000);
    });
}

function doTask3() {                                            // dotask3 function which return the promise after 4 second
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Task3 completed  after 4 seconds');
        }, 4000);
    });
}

async function* generatorFunc () {          // generator object is written by generator function with async & await
     yield await doTask1();
     yield await doTask2();
     yield await doTask3();
}

const gen = generatorFunc();

gen.next().then(console.log);
gen.next().then(console.log);
gen.next().then(console.log);

/* OUTPUT : 

{value: 'Task1 completed after 2 seconds', done : false}
{value: 'Task2 completed after 3 seconds', done : false}
{value: 'Task3 completed after 4 seconds', done : false}

*/