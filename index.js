function myEach(collection,callback){
    if(Array.isArray(collection)){
        for(let i = 0;i < collection.length; i++){
            callback(collection[i], i, collection);
        }
    }else if(typeof collection === 'object' && collection !== null){
        for (let key in collection){
            if (collection.hasOwnProperty(key)){
                callback(collection[key], key, collection)
            }
        }
    }
    return collection;
}

function myMap (collection,callback){
    const result = [];
    if(Array.isArray(collection)){
        for(let i = 0;i < collection.length; i++){
            result.push(callback(collection[i], i, collection));
        }
    }else if(typeof collection === 'object' && collection !== null){
        for (let key in collection){
            if (collection.hasOwnProperty(key)){
                result.push(callback(collection[key], key, collection));
            }
        }
    }
    return result;
}

function myReduce(arr, callback, initialValue = 0) {
    let accumulator = initialValue; // set initial accumulator value to value of initialValue
    if (arr.length === undefined) {
        arr = Object.values(arr) // Converts object values to array
    }
    if (arr.length === 0) { 
        return accumulator;
    }

    if (initialValue===0) {
        accumulator=arr[0]
        arr = arr.filter(val=>val!==arr[0])
    }
    arr.map(value => {
        accumulator = callback(accumulator, value, arr)
    })
    return accumulator
}

function myFind (collection,callback){
    for(let i = 0;i < collection.length; i++){
        if(callback(collection[i], i, collection)){
            return collection[i];
        }
    }
    return undefined;
}
function myFilter (collection,callback){
    const result = [];
    if(Array.isArray(collection)){
        for(let i = 0;i < collection.length; i++){
            if(callback(collection[i], i, collection)){
                result.push(collection[i])
            }
        }
    }else if(typeof collection === 'object' && collection !== null){
        for (let key in collection){
            if (collection.hasOwnProperty(key)){
                if(callback(collection[key], key, collection)){
                    result.push(collection[key]);
                }
            }
        }
    }
    return result;
}

function mySize(collection){
    if(Array.isArray(collection)){
        return collection.length;
    }else if (typeof collection ==='object' && collection !== null){
        return Object.keys(collection).length;
    }else{
        return 0;
    }
}

function myFirst(collection, n){
    if(Array.isArray(collection)){
        if(n === undefined){
            return collection[0];
        }
        return collection.slice(0,n)
    }
    return undefined;
}

function myLast(collection, n){
    if (Array.isArray(collection)) {
        if(n === undefined){
            return collection[collection.length -1];
        }else{
            return collection.slice (-n)
        }
    }else{
        return undefined;
    }
} 

function myKeys(obj){
    if(typeof obj !== 'object' || obj === null){
        return [];
    }
    return Object.keys(obj)
}

function myValues(obj){
    if(typeof obj !== 'object' || obj === null){
        return [];
    }
    return Object.values(obj)
}