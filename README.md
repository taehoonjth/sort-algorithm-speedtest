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
## Running the test
```
node sort.js
```
## Contributing
You can add more sort algorithms or better implementation with same alogorithm. When you add your sort function, please add your function to sortAlgorithmTester.
For example...
```
sortAlgorithmTester(30000, bubbleSort, bubbleSort_2, selectionSort, iterativeMergeSort, quickSort, YOUR FUNCTION!);
```
