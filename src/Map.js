


//const divarr = arr.map(num => num/10);
//console.log(divarr);

//in my logic:
//mapFunc will perform the function we want to perform on each number.
function map(arr, mapFunc) {
        const mapArr = []; // empty array
// loop though array
        for(let i=0;i<arr.length;i++)
        { const result = mapFunc(arr[i], i, arr);
            mapArr.push(result);
        }
        return mapArr;
    }
let arr = [10,20,30,40];
//new map function
const squareArr2 = map(arr, num => num ** 2);
console.log(squareArr2);
