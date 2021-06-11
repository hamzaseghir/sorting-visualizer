export function mergeSort(array){
    if (array.length === 1) return array;
    // console.log("array = " + array);
    const half = Math.round(array.length / 2);
    const first = mergeSort(array.slice(0, half));
    // console.log("first = " + first);
    const second = mergeSort(array.slice(half));
    // console.log("second = " + second);

    const arr = [];
    let i = 0; // first index
    let j = 0; // second index
    let k = 0; // merged array index
    while(i < first.length && j < second.length){
        if(first[i] < second[j]){
            arr[k] = first[i];
            i++;
        }
        else{
            arr[k] = second[j];
            j++;
        }
        k++;
    }
    // Quand un des tableau est épuisé, on push le reste de l'autre sortedArray
    while(i < first.length) arr.push(first[i++])
    while(j < second.length) arr.push(second[j++])
    console.log(arr);
    return arr;
}
