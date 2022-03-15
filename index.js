const standardizeInput = function (collection) {
    return collection instanceof Array
      ? collection.slice()
      : Object.values(collection);
  };

function myEach(collection, callback) {
    const standardizedCollection = standardizeInput(collection)

    for (let i = 0; i < standardizedCollection.length; i++) {
        callback(standardizedCollection[i]);
    }
    return collection
}

function myMap (collection, callback) {
    const standardizedCollection = standardizeInput(collection)
    const newArray = []

    for (let i = 0; i < standardizedCollection.length; i++) {
        newArray.push(callback(standardizedCollection[i]));
    }
    return newArray
}

const myReduce = function (collection, callback, acc) {
    let newCollection = standardizeInput(collection);
  
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  };

function myFind(collection, predicate) {
    const standardizedCollection = standardizeInput(collection)

    for (let i = 0; i < standardizedCollection.length; i++) {
       if(predicate(standardizedCollection[i])) return standardizedCollection[i]; 
    }
}

function myFilter(collection, predicate) {
    const standardizedCollection = standardizeInput(collection)
    const filteredCollection = []

    for (let i = 0; i < standardizedCollection.length; i++) {
       if(predicate(standardizedCollection[i])) {
           filteredCollection.push(standardizedCollection[i])
       }
    }
    return filteredCollection
}

function mySize(collection) {
    const standardizedCollection = standardizeInput(collection);
    return standardizedCollection.length
}

function myFirst(array, n) {
    if(n) {return array.slice(0, n)}
    else {return array[0]}
}

function myLast(array, n) {
    if(n) {return array.slice(-n)}
    else {return array[array.length - 1]}
}

function myKeys(object) {
    let keys = [];
    for (let key in object) {
      keys.push(key);
    }
    return keys;
}

function myValues(object) {
    let values = [];
    for (let key in object) {
        values.push(object[key]);
     }
    return values;
};