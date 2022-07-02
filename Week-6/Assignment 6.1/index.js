function sumMax(arr){
    var currentMax = arr[0];
    var maxSoFar = arr[0];

    for(var i=1 ; i<arr.length ; i++){
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        maxSoFar = Math.max(maxSoFar , currentMax);
    }
    return maxSoFar;
}

const arr = [1, 2, 3, 4, -10];
console.log('Max sum of contiguous array', sumMax(arr));

/*  Time Complexity: O(N)
    Space Complexity: O(1)
*/

/* Input :
    arr = [1, 2, 3, 4, -10]
    Output : 
    Max sum of contiguous array : 10 
    */