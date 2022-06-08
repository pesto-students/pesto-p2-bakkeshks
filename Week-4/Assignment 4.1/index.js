
	const myPromise =new Promise((res,rej) => {        
  	const randomNumber = Math.random()*100;       // store random no to randomNumber const variable
		//const randomNumber1 = 4;			
    if(randomNumber % 5 == 0){                    // check if random no is divisable by 5
    res('resolve');
    }else{
    rej('rejected ');
 }
  });
  
myPromise.then((message)=>{                       // then part is executed if promise got resolved
console.log(message);
}).catch((message) =>{                            // catch part is executed if the promise got rejected
console.log(message);
});


 

