export default function bubbleSort(array){
    for(let i = 0 ; i < array.length ; i++){
        for(let j = 0; j < array.length - i - 1; j++){
            if(array[i] > array[j])
            swap(array[i],array[j]);
        }
    }
    return array;
}

function swap(a , b){
    [a,b] = [b, a];
}