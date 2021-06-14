// Impossible de garder index de l'array de base avec cette implémentation
// export function mergeSort(array , index){
//     if (array.length === 1) return array;
//     const half = Math.round(array.length / 2);
//     const first = mergeSort(array.slice(0, half));
//     const second = mergeSort(array.slice(half));

//     const arr = [];
//     let i = 0; // first index
//     let j = 0; // second index
//     let k = 0; // merged array index
//     while(i < first.length && j < second.length){
//         if(first[i] < second[j])
//             arr[k] = first[i++];
//         else
//             arr[k] = second[j++];
//         k++;
//     }
//     /* Quand un des tableau est épuisé, on push le reste de l'autre sortedArray */
//     while(i < first.length) arr.push(first[i++])
//     while(j < second.length) arr.push(second[j++])
//     return arr;
// }

export function getMergeSortAnim(array){
    const anim = [];
    mergeSort(array,0, array.length-1, anim);
    return anim;
}

function mergeSort(baseArray, startIdx, endIdx, anim ){
    if ((startIdx - endIdx) <= 1) return;
    const half = Math.round((startIdx + endIdx) / 2);

    const arr = [];
    let i = startIdx; // first index
    let j = half+1; // second index
    let k = startIdx; // base array index

    while(i < half && j < endIdx){
        // valeurs qu'on compare
        anim.push([i,j]);
        if(first[i] < second[j]){
            
            arr[k] = first[i++];
        }     
        else{
            arr[k] = second[j++];
        }
            
        k++;
    }

    while(i < first.length){
        arr.push(first[i++]);
    } 

    while(j < second.length) {
        arr.push(second[j++]);
    }
    return arr;
}
