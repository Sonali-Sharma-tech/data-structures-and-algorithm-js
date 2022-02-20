let newArr = [];
function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
  // if an element in number then push to an array
//    console.log(arr);
  if ( arr.length > 0) {
    let isNumber = typeof arr[0] === 'number' ? true : false;  
    if (isNumber) {
         newArr = [...newArr, arr[0]];
    }
    else {
      flatten(arr[0]); 
    }
     flatten(arr.slice(1));
  }
return newArr;
}

console.log(flatten([1,[2,3,[[4,5]]]]));