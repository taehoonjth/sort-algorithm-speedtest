# Sort algorithm speed test
To list up all of the sorting algorithms, and run speed test
## List of sort algorithms
- [Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort)
- [Selection sort](https://en.wikipedia.org/wiki/Selection_sort)
- [Merge sort](https://en.wikipedia.org/wiki/Merge_sort)
  - Recursive
  - Iterative
- [Heap sort](https://en.wikipedia.org/wiki/Heapsort)
  - Top down(sift down)
  - Top down(sift up)
  - Bottom up
- [Quick sort](https://en.wikipedia.org/wiki/Quicksort)
  - Lomuto partition scheme
  - Hoare partition scheme
## Getting Started
### Installing
```
git clone https://github.com/Taehoonjth/sort-test/ && cd sort-test
```
### Running the test
Run sort.js
```
node sort.js
```
And the result will be
```
Start sorting the 30000 elements of an array

bubbleSort took 1547 millisecond
bubbleSort_2 took 1818 millisecond
selectionSort took 1391 millisecond
iterativeMergeSort took 42 millisecond
quickSort took 16 millisecond
heapSort_TopDown_SiftDown took 7 millisecond
heapSort_TopDown_SiftUP took 9 millisecond
heapSort_BottomUP took 9 millisecond

The winner is heapSort_TopDown_SiftDown

Test is over.
[Finished in 4.9s]
```
You can also change a number of elements of an array for speed test by changing the first parameter of `sortAlgorithmTester` function(Be careful! This could blow your computer up!)
```
sortAlgorithmTester(30000, ...); ---> sortAlgorithmTester(50000, ...);
```
## Contributing
You can add more sort algorithms or better implementation of the same algorithm. When you add your sort function, please name it `algorithm_yourName` and add your function to `sortAlgorithmTester` as a parameter.
For example...
```
sortAlgorithmTester(30000, bubbleSort, selectionSort, iterativeMergeSort, quickSort, YOUR FUNCTION!);
```
