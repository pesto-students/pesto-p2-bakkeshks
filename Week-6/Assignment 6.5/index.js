function findPair(arr, n) {
   
    let i = 0;
    let j = 1;

    // Search for a pair
    while (i < arr.length && j < arr.length) {
        if (i != j && arr[j] - arr[i] == n) {
            console.log("Pair Found: (" + arr[i] + ", " + arr[j] + ")");
            return 1;
        } else if (arr[j] - arr[i] < n)
            j++;
        else
            i++;
    }

 
    return 0;
}

var arr = [-10,20];
var b= 30;
console.log(findPair(arr,b));