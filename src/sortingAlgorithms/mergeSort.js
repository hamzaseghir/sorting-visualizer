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
    // tableau auxiliaire avec valeur de baseArray
    const auxArray = [...array];
    mergeUtil(array,0, array.length-1, anim, auxArray);
    return anim;
}

// Partie recursive du mergeSort, correspond à la ligne 4 à 6
function mergeUtil(baseArray, startIdx, endIdx, anim, auxArray){ 
    if ((startIdx - endIdx) <= 1) return;
    const half = Math.round((startIdx + endIdx) / 2);
    mergeUtil(baseArray, startIdx, half, half, anim, auxArray);
    mergeUtil(baseArray, half+1, endIdx, half, anim, auxArray);
    mergeSort(baseArray, startIdx, endIdx, half, anim, auxArray);
}

// Peuple l'array d'animation
function mergeSort(baseArray, startIdx, endIdx, middleIdx, anim, auxArray ){

    let i = startIdx; // first index
    let j = middleIdx+1; // second index
    let k = startIdx; // base array index

    while(i < middleIdx && j < endIdx){
        // valeurs qu'on compare
        // chgt couleur
        anim.push([i,j]);
        // retour au couleur de base
        anim.push([i,j]);
        if(baseArray[i] < baseArray[j]){
            
            baseArray[k++] = auxArray[i++];
        }     
        else{
            baseArray[k++] = auxArray[j++];
        }    
    }

    while(i <= middleIdx){
        // on remplace la valeur de baseArray à l'index k par celle de l'array auxiliaire(valeurs de base) à l'index i 
        baseArray[k++] = auxArray[i++];
    } 

    while(j <= endIdx) {
        baseArray[k++] = auxArray[j++];
    }
}
