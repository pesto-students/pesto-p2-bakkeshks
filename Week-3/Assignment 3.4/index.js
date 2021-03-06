function createStack() {
    var items = [];           
    return {
      push(item) {                                              // Push() function to add element to stack
        items.push(item);
        console.log(items);                                     // Displaying elements in the stack
      },  
      pop() {                                                   // Pop() function to remove element from stack            
        return items.pop(); 
      },
    };
  }
  console.log("current state of stack: ");
  var stack = createStack();
  stack.items=[110,150];
  stack.push(100);
  stack.push(50);
  console.log("Elements after pop :");
  console.log(stack.pop()); 
  console.log(stack.items);        //  no access to array items outside createstack() function.
            
/* OUTPUT : 

  Elements in the stack :
   [ 100 ]
  Elements in the stack :
   [ 100, 50 ]
  Elements after pop :
   50
  undefined  
  */