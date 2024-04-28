// 1. Write a program to find the value which is having most frequency in the array

let arr = [2, 'q', 3, 'q', 'p', 4, 'p', 'q', 8, 'p', 'q', 'p'];
let obj = {};
let maxFreq = 1;
let maxFreqElement;

for(let i = 0; i < arr.length; i++) {
    let data = arr[i];
    if(obj[data]) {
        obj[data]++;
    } else {
        obj[data] = 1;
    }
    if(obj[data] > maxFreq) {
        maxFreq = obj[data];
        maxFreqElement = data;
    }
}
console.log(obj)
console.log(`${maxFreqElement} (${maxFreq} times)`)

// 2. Write a program to find the unique value in the array

let arr1 = [2, 2, 'q', 3, 'q', 3, 'p', 4, 'p', 'q', 8, 8, 'p', 'q', 'p'];
let obj1 = {};
let minFreq = 1;
let uniqueElement;

for(let i = 0; i < arr1.length; i++) {
    let data1 = arr1[i];
    if(obj1[data1]) {
        obj1[data1]++;
    }
    else {
        obj1[data1] = 1;
    }  
}
for(let keys in obj1) {
    if(obj1[keys] === 1) {
        uniqueElement = keys;
    }
}
console.log(obj1)
console.log(`${uniqueElement} is the unique element in the array`)
