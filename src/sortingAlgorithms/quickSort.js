// quicksort w/ random pivot
export default function quicksort(array, start, end){
    if(end-1 > 0){
        let p = partitionRandom(array, start, end);
        quicksort(array, start, p-1);
        quicksort(array, p+1, end);
    }
}

function partition(array, start, end){
    let pivot = array[end];
    let index = start;
    for(let i = start; i < end; i++){
        if(array[i] < pivot){
            swap(i, index, array)
            index++;
        }
    }
    swap(i, end, array);
    return i;
}

function partitionRandom(array, start, end){
    let random = Math.floor(Math.random() * end);
    swap(random, end, array);
    return partition(array, start, end);
}


function swap(a , b , array){
    [array[a],array[b]] = [array[b], array[a]];
}