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
  console.log(`time ${done - start}`);
  return result;
}

var arr = unSortedArrayMaker(10000);

console.log(bubbleSort(arr));




//console.log(unSortedArrayMaker(1000));
