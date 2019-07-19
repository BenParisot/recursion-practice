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

console.log(factorial(4));
