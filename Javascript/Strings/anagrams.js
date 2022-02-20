// anagrams

// input - two strings 
// output -  a boolean value

var str1 = 'abc';
var str2 = 'cab';

function isAnagrams(str1, str2) {
  // check if length of two strings are equal or notvar str1 = 'abc';
    if( str1.length !== str2.length) {
       return false;
    }
   // define object 
  var frequencyCount1 = {}
  var frequencyCount2 = {}
  // run a loop over string
  for(var char of str1) {
    // store the count of each char if present 
    frequencyCount1[char] = ++frequencyCount1[char] || 1;
  }
  // run a loop over string
  for(var char of str2) {
    // store the count of each char if present 
    frequencyCount2[char] = ++frequencyCount2[char] || 1
  }
  
  console.log(frequencyCount1);
  console.log(frequencyCount2);
  
  //  run a for loop over one object to check if key of one object is prsent in another object 
   for (var key in frequencyCount1){
      if(!frequencyCount2.hasOwnProperty(key)) {
        return false;
      }
     
     // if present check value of that key should be equal to key value in another object
     if(frequencyCount1[key] !== frequencyCount2[key]) {
        return false;
     }
   }
  return true;
  
  
}

console.log(isAnagrams('231', '321'));






  
  



