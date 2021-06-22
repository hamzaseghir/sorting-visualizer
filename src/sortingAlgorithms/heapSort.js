// max-heap
export default function heapSort(array) {
    let arrayLenght = array.length;
    let half = Math.floor(arrayLenght/2);

    for(let i = half - 1; i >= 0 ; i--){
        sortHeap(array, arrayLenght, i);
    }

    for(let i = arrayLenght-1; i > 0; i--){
        swap(0, i, array);
        arrayLenght--;
        sortHeap(array, arrayLenght, 0);
    }

    return array;
}

function heapify(array, arrayLenght, parentIndex){
    let largest = parentIndex;
    let leftChild = 2 * parentIndex + 1;
    let rightChild = 2 * parentIndex + 2;

    if(leftChild < arrayLenght && array[leftChild] > array[largest]){
        largest = leftChild;
    }

    if(rightChild < arrayLenght && array[rightChild] > array[largest]){
        largest = rightChild;
    }

    if(largest !== parentIndex){
        swap(parentIndex, largest, array);
        sortHeap(array, arrayLenght, largest);
    }

}
 
   
function swap(a , b , array){
    [array[a],array[b]] = [array[b], array[a]];
}

// function swap(a, b, arr){
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = arr[temp]; 
// }

const unsortedArray = [1, 7, 2, 5, 3, 9, 8];
console.log(heapSort(unsortedArray));