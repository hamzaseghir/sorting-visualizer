// quicksort w/ random pivot
export default function quicksort(array, start, end){
    const anim=[];
    const pivotAnim = [];
    quicksortUtil(array, start, end, anim, pivotAnim);
    return [array, anim, pivotAnim];
}

function quicksortUtil(array, start, end, anim, pivotAnim){
    if(start < end){
        let p = partitionRandom(array, start, end, anim, pivotAnim)[0];
        // console.log(p);
        quicksortUtil(array, start, p-1, anim ,pivotAnim);
        // console.log(start, p-1);
        quicksortUtil(array, p+1, end , anim, pivotAnim);
        // console.log(p+1, end );
    }
    return array, anim, pivotAnim;
}


function partition(array, start, end, anim, pivotAnim){
    let pivot = array[end];
    let index = start;
    pivotAnim.push(end);
    for(let i = start; i < end; i++){
        if(array[i] <= pivot){
            swap(i, index, array)
            index++;
            anim.push([i, array[index]]);
        }
    }
    swap(index, end, array);
    pivotAnim.push(index);
    console.log(index);
    return [index, anim, pivotAnim];
}

function partitionRandom(array, start, end, anim, pivotAnim){
    let randomPivot = Math.floor(Math.random() * (end - start +1));
    swap(end, randomPivot, array);
    return partition(array, start, end, anim, pivotAnim);
}


function swap(a , b , array){
    [array[a],array[b]] = [array[b], array[a]];
}