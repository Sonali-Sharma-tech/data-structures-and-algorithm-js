
// inputs - positive two numbers
// output - boolean value
// inputs are numbers only, same frequency , O(npositive )
function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    
    
    // convert nums into string 
     let numStr1 = num1.toString();
     let numStr2 = num2.toString();
     
     // define two objects to store the count of each digit
     let lookup = {};
     // check the length of two numbers is equal or not
     if(numStr1.length !== numStr2.length)
      return false;
      
      
  // run a loop over string and store the count
    for ( let char of numStr1) {
      lookup[char] = ++lookup[char] || 1;
    }
    /*lookup = {
        1:1,
        8:1,
        2:1,
    }
    
    */
  // run a loop over another string to check if number exists in lookup 
   
   for ( let char of numStr2) {
      if(!lookup[char])
       return false;
      
      lookup[char] = lookup[char] - 1;
   }
   
   return true;
  }
  