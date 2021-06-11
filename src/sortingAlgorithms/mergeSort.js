const mergeSort = array => {
    if (array.length == 1) return array;
    const half = Math.round(array / 2);
    const first = mergeSort(array.splice(0, half));
    const second = mergeSort(array.splice(half));
    
    const arr = [];
    let i = 0; // first index
        j = 0; // second index
        k = 0; // merged array index
    while(i < first.length && j < second.length){
        if(first[i] < second[j])
            arr[k] = first[i++];
        else
            arr[k] = second[j++];
        k++;
    }
    // Quand un des tableau est épuisé, on push le reste de l'autre sortedArray
    while(i < first.length) arr.push(first[i++])
    while(j < first.length) arr.push(first[j++])
    return arr;
}

export default mergeSort();