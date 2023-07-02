let str1 = "abc"

let str2 = "bxyzaklmc"


function findSubString(str1, str2) {
  let k = 0;
  let t = 0;
  for(let i = 0; i < str1.length; i++) {
     
    for(let j = k; j < str2.length; j++) {
       k = j+1;
      if(str1[i] === str2[j]) {
         console.log('i', i , str1[i]);
        console.log('j', j , str2[j]);
        t = i;
       
        break;
      }
    }
    
  }
 if(t === str1.length - 1) {
   console.log('t', t)
   console.log('str1 is present in str2');
 } else {
   console.log('str1 not present in str2');
 }
}
     
findSubString(str1, str2);

/**
 * 
 * let str1 = "abc"

let str2 = "axyzbklmc"


function isArraySorted(arr) {
  let sortedFlag = true;
  for(let i =0; i < arr.length ; i++) {
   if(arr[i] > arr[i + 1]) {
     sortedFlag = false;
     
     return sortedFlag;
   }
    
 }

  return sortedFlag;
  
  
}

function findSubString(str1, str2) {
  // create a map
  let map = {}
  Array.from(str1).forEach((o, index) => {
    map[o] = index
  })
   console.log('map', map)
  
  // iterate over str2 and compare indices of str1 
  //in str2
  
 let arr = Array.from(str2).map(str => {
   if(map.hasOwnProperty(str)) {
     return map[str]
   }else {
     return -1;
   }
 })
 
 console.log('arr', arr)
 
 // extract positive numbers from arr
 let positiveNumbers = [];
 arr.forEach(el => {
   if(el >0 || el === 0) {
     positiveNumbers.push(el)
   }
   
 })
 
 console.log('positiveNumbers', positiveNumbers)
 
 // check if they are in ascending order or not
 
 if(isArraySorted(positiveNumbers)) {
   console.log('str1 is present in str2 in correct order')
 } else {
   console.log('str1 is not present in str2 in correct order')
 }
 
  
 
}

     
findSubString(str1, str2);
               
               
               

 */