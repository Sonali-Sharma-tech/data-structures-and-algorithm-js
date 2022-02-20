/**
 * 
 * first sort the array i O(n logn)
 */
function triplet(arr) {
    let j = 2;
    let res_arr = [];
  while(j < arr.length -1) {
    for(var k = 0; k < j; k++) {
      n = (arr[k] * arr[k]) + (arr[(j-1)] * arr[(j-1)]);
    
    if (Math.ceil(Math.sqrt(n)) ===
          Math.floor(Math.sqrt(n))) {
      let obj = {};
      obj['a'] = arr[k];
      obj['b'] = arr[k + 1];
      obj['res'] = Math.sqrt(n);
      
         res_arr.push(obj);
  
         }
    }
    
    
    for(var i = 0;i< res_arr.length; i++) {
  
      if(binarySearch(res_arr[i].res, arr.slice(j))) {
  
        console.log( res_arr[i].a + " " + res_arr[i].b + " " + res_arr[i].res)
      }
    }
    j++;
  }
  }
  
  function binarySearch(x, arr) {
  
   var start = 0;
    var end = arr.length -1;
   
     while (start<=end){
   
          // Find the mid index
          let mid=Math.floor((start + end)/2);
    
          // If element is present at mid, return True
          if (arr[mid]===x) return true;
   
          // Else look in left or right half accordingly
          else if (arr[mid] < x)
               start = mid + 1;
          else
               end = mid - 1;
      }
    
      return false;
  }
  
  
  triplet([2,3,4,5,6,7]);
  
  