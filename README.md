# Sort algorithm speed test
To list up all of the sorting algorithms, and run speed test
## List of sort algorithms
* [Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort)
* [Selection sort](https://en.wikipedia.org/wiki/Selection_sort)
* [Merge sort](https://en.wikipedia.org/wiki/Merge_sort)
* [Heap sort](https://en.wikipedia.org/wiki/Heapsort)
* [Quick sort](https://en.wikipedia.org/wiki/Quicksort)
## Getting Started
### Installing
```
git clone https://github.com/Taehoonjth/sort-test/ && cd sort-test
```
### Running the test
```
node sort.js
```
You can also change a number of elements of an array for speed test by changing the first parameter of sortAlgorithmTester function(Be careful! This could blow your computer up!)
```
sortAlgorithmTester(30000, ...); ---> sortAlgorithmTester(50000, ...);
```
## Contributing
You can add more sort algorithms or better implementation of the same algorithm. When you add your sort function, please add your function to sortAlgorithmTester.
For example...
```
sortAlgorithmTester(30000, bubbleSort, selectionSort, iterativeMergeSort, quickSort, YOUR FUNCTION!);
```
