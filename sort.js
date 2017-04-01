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
  const start = new Date();
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
  const done = new Date();
  console.log(`Bubble sort took ${done - start} millisecond`);
  return result;
}

const selectionSort = function(array) {
  if (array.length < 2) {
    return array.slice();
  }
  const start = new Date();
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
  const done = new Date();
  console.log(`Selection sort took ${done - start} millisecond`);
  return result;
}

var arronBubbleSort = function(arr) {
  var sortedCounter = 0;
  for (var i = 1; i < arr.length; ++i) {
    if (arr[i] < arr[i - 1]) {
      var temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    } else { 
      ++sortedCounter; 
    }
  }
  
  if (sortedCounter < arr.length - 1) {
    return arronBubbleSort(arr); 
  }
  else return arr;
};


var swap = function(index1, index2, array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

var bubbleSort_2 = function(array) {
  const start = new Date();
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
  const done = new Date();
  console.log(`bubbleSort_2 took ${done - start} millisecond`);
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

const mergeSort = function() {
  if (array.length < 2) {
    return array.slice();
  }
}

// var arr = unSortedArrayMaker(5000);
// bubbleSort(arr)
// selectionSort(arr)
// const start = new Date();
// arronBubbleSort(arr)
// const done = new Date();
// bubbleSort_2(arr);
// console.log(`arronBubbleSort took ${done - start} millisecond`);

// console.log(merge([1, 3, 9], [4, 5, 6]));
// console.log(merge([4, 5, 6], [1, 3, 9]));

