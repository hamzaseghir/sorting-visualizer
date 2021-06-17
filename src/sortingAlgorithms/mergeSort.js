export default function getMergeSortAnim(array){
    const anim = [];
    // tableau auxiliaire avec valeur de baseArray
    const auxArray = [...array];
    mergeUtil(array, 0, array.length-1, anim, auxArray);
    return anim;
}

// Partie recursive du mergeSort, correspond à la ligne 4 à 6
function mergeUtil(baseArray, startIdx, endIdx, anim, auxArray){ 
    if ((startIdx === endIdx)) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeUtil(auxArray, startIdx, middleIdx,  anim, baseArray);
    mergeUtil(auxArray, middleIdx+1, endIdx,  anim, baseArray);
    mergeSort(baseArray, startIdx, endIdx, middleIdx, anim, auxArray);
}

// Peuple l'array d'animation
function mergeSort(baseArray, startIdx, endIdx, middleIdx, anim, auxArray ){
    
    // ligne 9 à 18
    let i = startIdx; // first index
    let j = middleIdx+1; // second index
    let k = startIdx; // base array index
    // console.log(startIdx, endIdx);

    while(i <= middleIdx && j <= endIdx){
        // valeurs qu'on compare
        // chgt couleur
        anim.push([i,j]);
        // retour au couleur de base
        anim.push([i,j]);
        // on doit effectuer l'animation de swap dans le if else
        if(auxArray[i] <= auxArray[j]){
            anim.push([k, auxArray[i]]);
            baseArray[k++] = auxArray[i++];
        }     
        else{
            anim.push([k, auxArray[j]]);
            baseArray[k++] = auxArray[j++];
        }    
    }
  
    // ligne 20 et 21
    while(i <= middleIdx){
        // on remplace la valeur de baseArray à l'index k par celle de l'array auxiliaire(valeurs de base) à l'index i 
        // on push quand même deux fois les valeurs pour les anim
        anim.push([i,i]);
        anim.push([i,i]);
        anim.push([k, auxArray[i]])
        baseArray[k++] = auxArray[i++];
    } 

    while(j <= endIdx) {
        anim.push([j,j]);
        anim.push([j,j]);
        anim.push([k, auxArray[j]])
        baseArray[k++] = auxArray[j++];
    }
}
