// quicksort w/ random pivot
export default function quicksort(array, start, end){
    if(start < end){
        let p = partitionRandom(array, start, end);
        quicksort(array, start, p-1);
        quicksort(array, p+1, end);
    }
    return array;
}

function partition(array, start, end){
    let pivot = array[end];
    let index = start;
    for(let i = start; i < end; i++){
        if(array[i] <= pivot){
            swap(i, index, array)
            index++;
        }
    }
    swap(index, end, array);
    return index;
}

function partitionRandom(array, start, end){
    let randomPivot = Math.floor(Math.random() * (end - start +1));
    swap(end, randomPivot, array);
    return partition(array, start, end);
}


function swap(a , b , array){
    [array[a],array[b]] = [array[b], array[a]];
}