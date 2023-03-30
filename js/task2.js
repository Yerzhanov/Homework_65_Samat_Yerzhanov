 function  average(arr)
{
    if(arr.length === 0)
        return 0;

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

let a = [1, 5, 12, 4, 3];
let b = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let c = [3, 10, 17];

console.log(average(a));
console.log(average(b));
console.log(average(c));