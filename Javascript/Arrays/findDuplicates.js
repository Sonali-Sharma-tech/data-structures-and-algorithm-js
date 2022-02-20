// input - any number of arguements with any data type
// output - boolean value
// imp data - variable args , time - o(n), space- o(n)
// examples - (4,2,1,1,6,4)
// examples - (4,2,1,6,'4','4')
// examples - (4,[2,1],1,6,'4')



function areThereDuplicates(...arr) {
    // good luck. (supply any arguments you deem necessary.)
    //define obj to store the count of args
    let argsCount = {};
    
   // run a loop over arguements to store counts
   for ( let arg of arr) {
       const key = typeof arg === 'string' ? 'S' + arg : arg ;
       if (argsCount[key])
         return true;
         
       argsCount[key] = 1;
       
    
   }
     return false;
  }