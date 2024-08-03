/** Gets random integer between 1 to 6 */
function d6(){
    return Math.floor(Math.random() * 6) + 1;
}

/** Get n rolls, returns an Array with randomly generated numbers as result of rolling dice */
function getRolls(n){
    return Array.from({length: n}, () => d6());
}

function sum(nums){
    return nums.reduce((prev, cur) => prev+cur,0);
}

export {d6, getRolls, sum};