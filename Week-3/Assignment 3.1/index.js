// user defined memoize function without using lodash.memoize package 
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();
        console.log('function called with ' + key);
        console.log(cache);
        if (cache.has(key)) {
            console.log("Returns without computing :");
            return cache.get(key);
        }
        console.log("Returns :");
        cache.set(key, fn(...args));
        return cache.get(key);
    };
}
// compute addition. 
function add(a, b) {
    if (arguments.length == 1) { // This statement will check and compare the number of arguments equal to 1.    
        return a; // execute this statement if we pass one  argument.
    } else {
        return a + b; // execute this statment if we pass two argument.
    }
}

function time(fn) {
    console.time();
    console.timeEnd();
    console.log(fn());
    console.log('\n');
}

const memoizeAdd = memoize(add);
time(() => memoizeAdd(100, 100)); // returns 200
time(() => memoizeAdd(100)); // returns 100
time(() => memoizeAdd(100, 200)); // returns 300
time(() => memoizeAdd(100, 100)); // returns 200 without computing 
