function createCounter() {
    let counter = 1;
    function increaseCounter() {
        counter += 1;
    }
    return increaseCounter;
}

function doTwice(func) {
    func();
    func();
}