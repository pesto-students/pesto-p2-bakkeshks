function createIncrement() {                // create outer function called createincrenment()
    let count = 0;                          // Initilaze count variable to  value to 0
    function increnment() {                 // create inner function called increnment()
        count++;                            
    }
    let message = "count is "+count;        //  Initilaze message  variable to value 
    function log() {                        // create log function which display message
        console.log(message);
    }
    return [increnment,log];                
}

const[increnment,log] = createIncrement();          // invoke or call  the createincrement function
increnment();                                       // call the increnment() function
increnment();                                       // call the increnment() function
increnment();                                       // call the increnment() function
log();                                              // call the log()  function

// OUTPUT : Count is O (zero)
// STEPS : why count is 0 not 3 
//  1] The program begin calling from line no 13 which is createincrement() function and set the count variable  value to 0.
//  2] After setting count value to 0 we call increnment function 3 times.
//  3] 1'st Iteration count = 0 and increnment count by 1 and value count is 1
//  4] 2'st Iteration count = 1 and increnment count by 1 and value count is 2
//  5] 3'st Iteration count = 2 and increnment count by 1 and value count is 3
//  4] when we call log() function in the line no 7 it will check message variable in the inner scope 
//     since the variable is outer scope it will print the value as "COUNT IS 0".
//  5] Since the outer variable or function do not have access to inner function it will return count as 0 inside of 
//    count as 3 which was there in increnment() function .
//        
//      CLOSURE : closures are functions that can access values outside the block and the outer function cannot
//                  have access to inner function
//
//
//
//





