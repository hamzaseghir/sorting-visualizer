// O(n log n) w/ Heap
// Heap labeled tree  = binary tree such that the key labeling of each node dominates they key labeling of each of its children
// min-heap = dominate children containing a smaller key
export default function heapSort(array) {
    let arrayLenght = array.lenght;
    let half = Math.floor(arrayLenght/2);

    for(let i = half - 1; i >=0 ; i--){
        buildHeap(array, arrayLenght, i);
    }

    for(let i = n-1; i > 0; i--){
        swap(0, i, array);
        buildHeap(array, i, 0);
    }

    return array;
}

function buildHeap(array, arrayLenght, i){
    let largest = i;
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;

    if(leftChild < arrayLenght && array[leftChild] > array[largest]){
        largest = l;
    }

    if(rightChild < arrayLenght && array[rightChild] > array[largest]){
        largest = rightChild;
    }

    if(largest != i){
        swap(i, largest, array);
        buildHeap(array, arrayLenght, largest);
    }

}

function swap(a , b, arr){
    [arr[a], arr[b]] = [arr[b], arr[a]]
}