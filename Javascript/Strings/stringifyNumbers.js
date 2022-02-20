
function stringifyNumbers (obj) {
  // add whatever parameters you deem necessary - good luck!
  console.log(obj);
  if(obj && Object.keys(obj).length) {
      for (let key in obj) {
        //  console.log(key);
            obj[key] = (isNumber(obj[key])  && !isObject(obj[key])) ? obj[key].toString() : obj[key];
            
            if (isObject(obj[key])) {
                console.log(key);
                stringifyNumbers(obj[key]);
            }
       
        }
    }
   return obj; 
} 

function isNumber(value) {
   return typeof value === 'number' ? true : false;
}
function isObject(value) {
   return value.constructor === Object ? true : false;
}
let example =  {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(example));