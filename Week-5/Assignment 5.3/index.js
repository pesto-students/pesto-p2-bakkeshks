function hasDuplicate(arr) {
    /* hasDuplicate function which check if the element 
                                    in the array contain duplicate element */
    const arr2 = Array.from(new Set(numbers)); // arr2 set which stores the unique values and remove duplicate 
    if (arr.length == arr2.length) {
        return false;
    } else {
        return true;
    }

}
const numbers = [1, 2, -1]; // array elements
const result = hasDuplicate(numbers);
/* hasduplicate function will  return true if the elements in the
                                        array  contains duplicate or return false  if all elements are unique */
console.log(result);


/* OUTPUT : 
    False 
*/