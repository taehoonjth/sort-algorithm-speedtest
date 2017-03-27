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
  if (array.length < 2) {
    return array.slice();
  }
  const start = new Date();
  let result = array.slice();
  let end = result.length;
  while (end !== 1) {
    for (var i = 0; i < end - 1; i++) {
      let a = result[i];
      let b = result[i + 1];
      if (a > b) {
        result[i] = b;
        result[i + 1] = a;
      }
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
  console.log(`Bubble sort took ${done - start} millisecond`);
  return result;
}

var arr = unSortedArrayMaker(10);

// console.log(bubbleSort(arr));
console.log(selectionSort(arr));

