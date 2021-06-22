// max-heap
export default function heapSort(array) {
    const anim = [];
    let arrayLenght = array.length;
    let half = Math.floor(arrayLenght/2);

    for(let i = half - 1; i >= 0 ; i--){
        heapify(array, arrayLenght, i, anim);
    }

    for(let i = arrayLenght-1; i > 0; i--){
        swap(0, i, array);
        anim.push([0, array[i]]);
        anim.push([i, array[0]]);
        arrayLenght--;
        heapify(array, arrayLenght, 0, anim);
    }

    return anim;
}

function heapify(array, arrayLenght, parentIndex, anim){
    let largest = parentIndex;
    let leftChild = 2 * parentIndex + 1;
    let rightChild = 2 * parentIndex + 2;

    if(leftChild < arrayLenght && array[leftChild] > array[largest]){
        anim.push([largest, array[leftChild]]);
        anim.push([leftChild, array[largest]]);
        largest = leftChild;
    }

    if(rightChild < arrayLenght && array[rightChild] > array[largest]){
        anim.push([largest, array[rightChild]]);
        anim.push([rightChild, array[largest]]);
        largest = rightChild;
    }

    if(largest !== parentIndex){
        swap(parentIndex, largest, array);
        anim.push([parentIndex, array[largest]]);
        anim.push([largest, array[parentIndex]]);
        heapify(array, arrayLenght, largest, anim);
    }

}
  
function swap(a , b , array){
    [array[a],array[b]] = [array[b], array[a]];
}