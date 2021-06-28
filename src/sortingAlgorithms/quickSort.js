export default function quicksort(array, start, end){
    const anim = [];
    quicksortUtil(array, start, end, anim);
    return anim;
}

function quicksortUtil(array, start, end, anim){
    if(start < end){
        let p = partitionRandom(array, start, end, anim);
        quicksortUtil(array, start, p, anim);
        quicksortUtil(array, p+1, end, anim);
    }
}

// Hoare partition
function partition(array, start, end, anim){
    let pivot = array[end];
    let i = start - 1; // left index
    let j = end + 1; // right index
    anim.push([start, end,"pivot"])

    while(true){
        do{
            i++;
        }while(array[i]< pivot);

        do{
            j--;
        }while(array[j]> pivot)

        if(i >= j){
            anim.push([start, end,"pivot"])
            return j;
        }
        anim.push([i, array[j],"swap"]);
        anim.push([j, array[i],"swap"]);
        swap(i , j, array);      
    }
}

function partitionRandom(array, start, end, anim){
    let randomPivot = Math.floor(Math.random() * (end - start) + start);  
    // anim.push([end, randomPivot,"randomPivot"]);
    // anim.push([end, randomPivot,"randomPivot"]);
    swap(end, randomPivot, array);
    return partition(array, start, end, anim);
}

function swap(a , b , array){
    [array[a],array[b]] = [array[b], array[a]];
}