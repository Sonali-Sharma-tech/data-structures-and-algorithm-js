let newArr = [];
function collectStrings (obj) {
    console.log(obj);
    for (let key in obj) {
        if (isString(obj[key])) newArr = [...newArr, obj[key]];
        if(isObject(obj[key])) {
            collectStrings(obj[key]);
        }
    }
   
    return newArr;
}
function isString(value) {
    return typeof value === 'string';
}

function isObject(value) {
 return typeof value === 'object';
}
let example =  {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: ["bar","bath","soap"],
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
}

console.log(collectStrings(example));