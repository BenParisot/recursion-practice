//countdown practice
function countdown(i) {
    if(i === 0) {
        console.log('done!');
        return;
    }
    console.log(i);
    countdown(i - 1);
}

// countdown(50);


//factorial practice

function factorial(num) {
    if(num < 0) return;
    if(num === 0) return 1;
    return num * factorial(num - 1);
}

// console.log(factorial(4));


function countList(arr) {
    if(arr.length === 0) return 0;
    return 1 + countList(arr.slice(1));
}

const arr1 = [2, 3, 1, 4, 5, 6, 4, 2, 3, 4];
console.log(countList(arr1));
