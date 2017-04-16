//Make an array which is unsorted with a given length
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

const swap = function(index1, index2, array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
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
  for (var i = 0; i < array.length; i++) {
    result.push([array[i]]);
  }
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
  return result[0];
}

const quickSort = function(array) {
  // console.log(array);
  if (array.length <= 1) {
    return array;
  } 
  var less = [];
  var greater = [];
  var pivot = array[array.length - 1];
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  // console.log(`pivot is ${pivot}`);
  return quickSort(less).concat([pivot], quickSort(greater));
}

const quickSort_3way = function() {

}

const heapSort_TopDown_SiftDown = function(array) {
  const parentIndex = function(index) {
    return Math.floor((index - 1) / 2);
  }
  const childrenIndices = function(index) {
    return [index * 2 + 1, index * 2 + 2];
  }
  const iLeftChild = function(index) {
    return index * 2 + 1;
  }
  const heapify = function(array) {
    var start = array.length - 1;
    while(start >= 0) {
      siftDown(array, start, array.length - 1);
      start--;
    }
  }
  const siftDown = function(array, start, end) {
    var i = start; 
    while(iLeftChild(i) <= end) {
      // console.log('before siftDown', array);
      var child = iLeftChild(i);
      var iSwap = i;
      if (array[iSwap] < array[child]) {
        iSwap = child;
      }
      if (child + 1 <= end && array[iSwap] < array[child + 1]) {
        iSwap = child + 1;
      }
      if (iSwap === i) {
        return;
      } else {
        swap(i, iSwap, array);
        i = iSwap;
      }
      // console.log('after siftDown', array);
    }
  }
  //Build the heap in array a so that largest value is at the root
  heapify(array);
  var end = array.length - 1;
  while(end > 0) {
    swap(0, end, array);
    end--;
    siftDown(array, 0, end);
  }
  return array;
}

const heapSort_TopDown_SiftUP = function(array) {
  const iLeftChild = function(index) {
    return index * 2 + 1;
  }
  const heapify = function(array, count) {
    let end = 1;
    while(end < count) {
      siftUP(array, 0, end);
      end++;
    }
    return array;
  }
  const siftUP =function(array, start, end) {
    const parentIndex = function(index) {
      return Math.floor((index - 1) / 2);
    }  
    let child = end;
    while(child > start) {
      let iParent = parentIndex(child);
      if (array[iParent] < array[child]) {
        swap(iParent, child, array);
        child = iParent;
      } else {
        return;
      }
    }
    return array;
  }
  const siftDown = function(array, start, end) {
    var i = start; 
    while(iLeftChild(i) <= end) {
      // console.log('before siftDown', array);
      var child = iLeftChild(i);
      var iSwap = i;
      if (array[iSwap] < array[child]) {
        iSwap = child;
      }
      if (child + 1 <= end && array[iSwap] < array[child + 1]) {
        iSwap = child + 1;
      }
      if (iSwap === i) {
        return;
      } else {
        swap(i, iSwap, array);
        i = iSwap;
      }
      // console.log('after siftDown', array);
    }
  }
  heapify(array, array.length);
  let end = array.length - 1; 
  while(end > 0) {
    swap(0, end, array);
    end--;
    siftDown(array, 0, end);
  }
  return array;
}

const heapSort_BottomUP = function(array) {
  const iParent = function(index) {
    return Math.floor((index - 1) / 2);
  }
  const iLeftChild = function(index) {
    return index * 2 + 1;
  }
  const iRightChild = function(index) {
    return index * 2 + 2;  
  }
  const leafSearch = function(array, i, end) {
    let j = i;
    while (iLeftChild(j) <= end) {
      if (iRightChild(j) <= end && array[iRightChild(j)] > array[iLeftChild(j)]) {
        j = iRightChild(j);
      } else {
        j = iLeftChild(j);
      }
    }
    return j;
  }
  const siftDown = function(array, i, end) {
    let j = leafSearch(array, i, end);
    while(array[i] > array[j]) {
      j = iParent(j);
    }
    x = array[j];
    while(j > i) {
      let temp = array[iParent(j)];
      array[iParent(j)] = x;
      x = temp;
      j = iParent(j);
    }
  }
  const heapify = function(array) {
    let start = array.length - 1;
    while(start >= 0) {
      siftDown(array, start, array.length - 1);
      start--;
    }
  }
  heapify(array);
  let end = array.length - 1;
  while(end > 0) {
    swap(0, end, array);
    end--;
    siftDown(array, 0, end);
  }
  return array;
}

const shellSort = function() {

}

const sortAlgorithmTester = function(n, algorithm1, algorithm2) {
  var algorithms = [...arguments].slice(1); 
  var unSortedArray = unSortedArrayMaker(n);
  var history = {};
  console.log(`\nStart sorting the ${n} elements of an array\n`);
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
      history[algorithms[i].name] = end - start;
    } else {
      console.log(`${algorithms[i].name} failed!`);
    }
  }
  var winner;
  for (var key in history) {
    if (!winner) {
      winner = key;
    }
    if (history[key] < history[winner]) {
      winner = key;
    }
  }
  console.log(`\nThe winner is ${winner}`);
  console.log(`\nTest is over.`);
}

sortAlgorithmTester(30000, bubbleSort, bubbleSort_2, selectionSort, iterativeMergeSort, quickSort, heapSort_TopDown_SiftDown, heapSort_TopDown_SiftUP, heapSort_BottomUP);

