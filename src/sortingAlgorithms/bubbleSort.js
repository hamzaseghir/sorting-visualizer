export default function bubbleSort(array){
    const anim = [];
    const auxArray = [...array];
    for(let i = 0 ; i < array.length ; i++){
        for(let j = 0; j < array.length - i - 1; j++){
            if(array[j] > array[j+1]){
                anim.push([j+1, array[j]]);
                anim.push([j, array[j+1]]);
                swap(j, j+1, array);
            }
        }
    }
    return anim;
}

function swap(a , b , array){
    [array[a],array[b]] = [array[b], array[a]];
}