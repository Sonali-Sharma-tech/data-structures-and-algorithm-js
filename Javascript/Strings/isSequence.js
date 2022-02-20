function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    // inputs - two strings
    // outputs -boolean value
    // examples - ('hel','abcdehjekl')
    
    // steps to solve
    // check if input strings are empty
    if ( str1.length === 0 || str2.length === 0 || str2.length < str1.length) return false;
    
    //  set a pointer for first string str1 ex- i=0
    let i = 0; 
    // run a loop over another string str2  and check whether str[i] exists in str2 
    for (let j = 0; j < str2.length  ; j++) {
        
        // if exists - then i++ and increment loop as well
        if (str1[i] === str2[j])
          i++;
       
       if ( i === str1.length ) return true;
      
    }
    // if not exists - then return false
     return false;
    
    
    
  }