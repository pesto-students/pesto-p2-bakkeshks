function sortArray(arr) {                                   // function to sort array of 0's,1's,2's 

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}


let arr = [0, 2, 1, 2, 0];

let res=sortArray(arr);

console.log(res);

/* Input  :
    arr = [0,2,1,2,0]
    output = [0,0,1,2,2]
*/