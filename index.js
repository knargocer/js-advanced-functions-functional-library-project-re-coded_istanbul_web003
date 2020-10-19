  
const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      
      for (let i in collection ) {
        callback(collection[i])
      }
      return collection
    },

    map: function (collection, callback) {
      let arr = [];
      
      for (let i in collection) {
        arr.push( callback(collection[i]));
      }
      
      return arr
    },

    reduce: function (collection, callback, acc) {

      for (let i = 0; i < collection.length; i++) {
         if(acc===undefined){
            acc = collection[i]
          }
          else{
            let curr = collection[i]
            acc = callback(acc, curr, collection);
          }
      }
      return acc;
    },

    find: function (collection, predicate){
      for (let i=0; i < collection.length; i++){
        if (predicate(collection[i])){
          return collection[i];
        }
      }
    },

    filter: function (collection, predicate){
      const arr = []
      
      for (let i =0; i < collection.length; i++){
        if (predicate(collection[i])){
          arr.push(collection[i])
        }
      }
      return arr
    },

    size: function(collection){
      return Object.keys(collection).length;
    },

    first: function (arr, n){
      if (n) {
        return arr.slice(0, n);
      } 
      else {
        return arr[0] ;
      }
    },

    last: function (arr, n) {
      if(n){
        return arr.slice((arr.length)-n,(arr.length));
      } 
      else {
        return arr[(arr.length)-1] ;
      }
    },

    compact: function (arr) {
      let tmp = []
      for (let i = 0; i <arr.length;i++){
        if (arr[i]) {
          tmp.push(arr[i]);
        }
      }
      return arr;
    },

    sortBy: function (array, callback) {
      
      
      });
    },

    flatten: function (input) {
      const stack = [...input];
      const res = [];
      while(stack.length) {
        const next = stack.pop();
        if(Array.isArray(next)) {
          // push back array items, won't modify the original input
          stack.push(...next);
        } else {
          res.push(next);
        }
      }
      // reverse to restore input order
      return res.reverse();
    },
   flatten: function (input, shallow, r){
      if (!r) { r = [] }
      if (shallow) {
        return r.concat(...input);
      }
      for (let i = 0; i < input.length; i++) {
        if (input[i].constructor == Array) {
          flatten(input[i], shallow, r);
        }  else {
          const stack = [...input];
          const res = [];
          while (stack.length) {
            const next = stack.pop();
            if (Array.isArray(next)) {
              stack.push(...next);
            } else {
              res.push(next);
            }
          }
          return res.reverse();
        }
      }
      return r;
    },
    uniq: function (array, isSorted, callback){
      let resultArr = [];
      if (callback) {
        let arr = [...array].map((element) => callback(element));
        resultArr = array.filter(
          (value, index, array) => arr.indexOf(callback(value)) === index
        );
      } else {
        resultArr = [...new Set(array)];
      }
      return resultArr;
    },
    keys: function (obj){
      return Object.keys(obj);
    },
    values: function(obj){
      return Object.values(obj)
    },
    functions: function (fi) {
      let results = []
      for (let i in fi){
        if (typeof fi[i] === "function"){
           results.push(fi[i])
        }
      }
      return results.sort()
    },
  }
})();
