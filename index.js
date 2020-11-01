const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback){
      
      for (let i in collection) {
        callback(collection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      let tmp = [];
      for (let i in collection) {
        tmp.push(callback(collection[i]))
      }
      return tmp;
    },

    reduce: function(collection, callback, acc) {
      if (acc === undefined) {
        return collection.reduce(callback);
      } else {
        return collection.reduce(callback, acc);
      }
    },

    find: function (collection, predicate) {
      for (let i in collection) {
        if (predicate(collection[i]) === true) {
          return collection[i];
        }
      }
    },

    filter: function (collection, predicate) {
      const tmp = [];
      for (let i in collection) {
        if (predicate(collection[i]) === true) {
          tmp.push(collection[i]);
        }
      }
      return tmp;
    },

    size: function (collection) {
      return Object.keys(collection).length;
    },

    first: function (arr, e) {
      if (e === undefined) {
        return arr[0];
      }
      else {
        return arr.slice(0, e);
      }
    },

    last: function (arr, e) {
      if (e === undefined) {
        return arr[arr.length - 1];
      } 
      else {
        return arr.slice(arr.length - e);
      }
    },

    compact: function (array) {
      const tmp = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          tmp.push(array[i]);
        }
      }
      return tmp;
    },

    sortBy: function (array, callback) {
      return [...array].sort(function (a, b) {
        return callback(a) - callback(b);
      });
    },

    flatten: function(array, shallow) {
      let tmp = [];
      if (shallow) {
        tmp = [].concat(...array);
        return tmp;
      }
      else {
        for (let i of array) {
          if (Array.isArray(i)) {
            let arr = this.flatten(i);
            for (let n of arr) {
              tmp.push(n);
            }
          } 
          else {
            tmp.push(i);
          }
        }
      }
      return tmp
    },

    
    uniq: function (array, isSorted, callback) {
      let tmp = [];
  
      if (!callback) {
        return [...new Set(array)];
      } 
        let arr = [...array].map((element) => callback(element));
        tmp = array.filter(
          (value, index) => arr.indexOf(callback(value)) === index)
        return tmp;
    },


    keys: function (obj) {
      return Object.keys(obj);
    },

    values: function (obj) {
      return Object.values(obj);
    },

    functions: function (fi) {
      let tmp = [];
      for (let i in fi) {
        if (typeof fi[i] == "function") {
          tmp.push(fi[i]);
        }
      }
      tmp.sort();
      return tmp;
    },
  };
})();

fi.libraryMethod();