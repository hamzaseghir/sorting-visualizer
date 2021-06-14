import { useEffect, useState } from 'react';
import './SortingVisualizer.css';
import React from 'react';
import {getMergeSortAnim} from '../sortingAlgorithms/mergeSort';
import bubbleSort from '../sortingAlgorithms/bubbleSort';

function generateArray(min, max, number){
    let array = [];
    for(let i = 0; i< number; i++){
        array.push(generateNumber(min,max))
    }
    return array;
}

function SortingVisualizer(){

    const [min, max, number] = [1, 500, 10];
    let [values, setValues] = useState([]);

    useEffect(() => {
        setValues(generateArray(min, max, number));

    }, [min, max, number])


    const mergeSorting = () => {
    }

    const bubbleSorting = () => {
        let sortedArray = values.sort((a,b) => a- b);
        let bubbleSortArray = bubbleSort(values);
        console.log(arrayAreEqual(sortedArray, bubbleSortArray));
    }

    const refreshArray = () => {
        setValues(generateArray(min,max, number));
    }

    return (
    <>  
        <section className="array-container">
        {values.map((value, index)=> {
            return <div 
                        className="array-value" 
                        key={index}
                        style={{ height:`${value}px`}}>
                        {value}       
                        </div>
        })}
        </section>
        <div>
            <button onClick={refreshArray}>Nouveau tableau</button>
            <button onClick={mergeSorting}>Merge Sort</button>
            <button onClick={() => console.log("Quick Sort")}>Quick Sort</button>
            <button onClick={() => console.log("Heap Sort")}>Heap Sort</button>
            <button onClick={bubbleSorting}>Bubble Sort</button>
        </div>
    </> 
    ); 
}


// Generate a number in the interval [min, max[
function generateNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function arrayAreEqual(arrOne, arrTwo){
    if(arrOne.length !== arrTwo.length) return false;
    for(let i = 0; i < arrOne.length; i++){
        if(arrOne[i] !== arrTwo[i]) return false;
    }
    return true;
}

export default SortingVisualizer;