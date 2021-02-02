const times10 = (n) => n * 10; 

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
console.log('times10 returns:', times10(9));

const cache = {};

const memoTimes10 = (n) => {
    if (n in cache) {
        console.log(`the value ${n} is already in the cache`);
        return cache[n]; //
    }
    else {
        console.log (`${n} is not in the cache, calculating result`); 
        let result = n * 10; 
        cache[n] = result; // key value pair 
        return result 
    }
}

console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached
console.log(memoTimes10(9))
console.log(memoTimes10(12))

