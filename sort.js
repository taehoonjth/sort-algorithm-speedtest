const unSortedArrayMaker = function(length) {
  let arr = [];
  let m = 0;
  for (let i = 0; i < length; i++) {
    arr.push(i);
  }
  while(m < length) {
    let randomIndex = Math.floor(Math.random() * (length - m) + m);
    let temp = arr[randomIndex];
    arr[randomIndex] = arr[m];
    arr[m] = temp;
    m++;
  }
  return arr;
}

const bubbleSort = function(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('bubbleSort accepts only arrays');
  }
  if (array.length < 2) {
    return array.slice();
  }
  let result = array.slice();
  let end = result.length;
  while (end !== 1) {
    let swaped = false;
    for (var i = 0; i < end - 1; i++) {
      let a = result[i];
      let b = result[i + 1];
      if (a > b) {
        result[i] = b;
        result[i + 1] = a;
        swaped = true
      }
    }
    if (!swaped) {
      break;
    }
    end--;
  }
  return result;
}

const selectionSort = function(array) {
  if (array.length < 2) {
    return array.slice();
  }
  let result = array.slice();
  for (let i = 0; i < result.length; i++) {
    let min = result[i];
    for (let j = i; j < result.length; j++) {
      if (min > result[j]) {
        min = result[j];
        var minIndex = j;
      }
      if (j === result.length - 1) {
        if (min !== result[i]) {
          let t = result[i];
          result[i] = min;
          result[minIndex] = t;
        }
      }
    }
  }
  return result;
}

var swap = function(index1, index2, array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

var bubbleSort_2 = function(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('bubbleSort accepts only arrays');
  }
  var len = array.length;
  for (var i = 0; i < len; i++) {
    var swaps = 0;
    for (var j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swaps++;
        swap(j, j + 1, array);
      }
    }
    if (!swaps) { break; }
  }
  return array;
  };

const merge = function(left, right) {
  let merged = [];
  let iLeft = 0;
  let iRight = 0;
  while (merged.length !== left.length + right.length) {
    if (iRight === right.length || left[iLeft] <= right[iRight]) {
      merged.push(left[iLeft]);
      iLeft++
    } else {
      merged.push(right[iRight]);
      iRight++
    }
  }
  return merged;
};

const recursiveMergeSort = function() {
  if (array.length < 2) {
    return array.slice();
  }

}

const iterativeMergeSort = function(array) {
  if (array.length < 2) {
    return array.slice();
  }
  var result = [];
  //Initial step: Input array is split into "sorted" sublists
  for (var i = 0; i < array.length; i++) {
    result.push([array[i]]);
  }
  //Merge step: Adjacent sublists are merged into sorted sublists
  while(result.length !== 1) {
    var temp = [];
    for (var i = 0; i < result.length; i += 2) {
      if (result[i + 1]) {
        temp.push(merge(result[i], result[i + 1]));
      } else {
        temp.push(result[i])
      }
    }
    result = temp;
  }
  //Done! Return the sorted array:
  return result[0];
}

const sortAlgorithmTester = function(n, algorithm1, algorithm2) {
  var algorithms = [...arguments].slice(1); 
  var unSortedArray = unSortedArrayMaker(n);
  for (var i = 0; i < algorithms.length; i++) {
    var unSortedArrayCopy = unSortedArray.slice();
    const start = new Date();
    var sortedArray = algorithms[i](unSortedArrayCopy);
    const end = new Date();
    var sorted = true;
    for (var j = 0; j < sortedArray.length - 2; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        sorted = false;
        break;
      }
    }
    if(sorted) {
      console.log(`${algorithms[i].name} took ${end - start} millisecond`);
    } else {
      console.log(`${algorithms[i].name} failed!`);
    }
  }
}

sortAlgorithmTester(10000, bubbleSort, bubbleSort_2, selectionSort, iterativeMergeSort);








