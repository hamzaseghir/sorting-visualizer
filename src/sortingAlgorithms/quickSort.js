// quicksort w/ random pivot
// export default function quicksort(array, start, end){
//     const anim=[];
//     const pivotAnim = [];
//     quicksortUtil(array, start, end, anim, pivotAnim);
//     return [array, anim, pivotAnim];
// }

// function quicksortUtil(array, start, end, anim, pivotAnim){
//     if(start < end){
//         let p = partitionRandom(array, start, end, anim, pivotAnim)[0];
//         quicksortUtil(array, start, p-1, anim ,pivotAnim);
//         quicksortUtil(array, p+1, end , anim, pivotAnim);
//     }
//     return array, anim, pivotAnim;
// }


// function partition(array, start, end, anim, pivotAnim){
//     let pivot = array[end];
//     let index = start;
//     pivotAnim.push(pivot);
//     for(let i = index; i < end; i++){
//         if(array[i] < pivot){
//             swap(i, index, array)
//             index++;
//             anim.push([i, array[index]]);
//         }
//     }
//     swap(index, end, array);
//     pivotAnim.push(index);
//     return [index, anim, pivotAnim];
// }

// function partitionRandom(array, start, end, anim, pivotAnim){
//     let randomPivot = Math.floor(Math.random() * (end - start));
//     swap(end, randomPivot, array);
//     return partition(array, start, end, anim, pivotAnim);
// }

export default function quicksort(array, start, end){
    quicksortUtil(array, start, end);
    return array;
}

function quicksortUtil(array, start, end){
    if(start < end){
        let p = partitionRandom(array, start, end);
        quicksortUtil(array, start, p);
        quicksortUtil(array, p+1, end);
    }
}

// Hoare partition
function partition(array, start, end){
    let pivot = array[start];
    let i = start - 1; // left index
    let j = end + 1; // right index

    while(true){
        do{
            i++;
        }while(array[i]< pivot);

        do{
            j--;
        }while(array[j]> pivot)

        if(i >= j)
            return j;
        swap(i , j, array);      
    }
}

function partitionRandom(array, start, end){
    let randomPivot = Math.floor(Math.random() * (end - start) + start);
    swap(end, randomPivot, array);
    return partition(array, start, end);
}

function swap(a , b , array){
    [array[a],array[b]] = [array[b], array[a]];
}