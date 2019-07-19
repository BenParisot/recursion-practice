console.log('Wired up');
function countdown(i) {
    if(i === 0) {
        console.log('done!');
        return;
    }
    console.log(i);
    countdown(i - 1);
}

countdown(50);
