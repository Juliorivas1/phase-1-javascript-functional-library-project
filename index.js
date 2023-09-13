function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for(let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } 
    else if(typeof collection === 'object') {
      for(let key in collection) {
        if(collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  

  function myMap(collection, callback) {
    let newArray = [];
    
    if (Array.isArray(collection)) {
      for(let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i], i, collection));
      }
    } 
    else if(typeof collection === 'object') {
      for(let key in collection) {
        if(collection.hasOwnProperty(key)) {
          newArray.push(callback(collection[key], key, collection));
        }
      }
    }
    return newArray;
  }
  

  function myReduce(collection, callback, acc) {
    let collectionCopy;
  
    if (Array.isArray(collection)) {
      collectionCopy = [...collection];
    } 
    else if (typeof collection === 'object') {
      collectionCopy = Object.values(collection);
    }
  
    if (acc === undefined) {
      acc = collectionCopy.shift();
    }
  
    collectionCopy.forEach((value, index) => {
      acc = callback(acc, value, index, collection);
    });
    
    return acc;
  }
  

  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for(let i = 0; i < collection.length; i++) {
        if(predicate(collection[i], i, collection)) return collection[i];
      }
    } 
    else if(typeof collection === 'object') {
      for(let key in collection) {
        if(collection.hasOwnProperty(key)) {
          if(predicate(collection[key], key, collection)) return collection[key];
        }
      }
    }
    return undefined;
  }

  
  function myFilter(collection, predicate) {
    var result = [];
    
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) result.push(collection[i]);
      }
    } 
    else if (typeof collection == 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection))
          result.push(collection[key]);
      }
    }
    
    return result;
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } 
    else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
    return 0;
  }

  
  function myFirst(array, n) {
    if(n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }

  function myLast(array, n) {
    if(n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(Math.max(array.length - n, 0));
    }
  }
  