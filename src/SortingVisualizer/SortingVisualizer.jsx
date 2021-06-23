import { useEffect, useState } from 'react';
import './SortingVisualizer.css';
import React from 'react';
import getMergeSortAnim from '../sortingAlgorithms/mergeSort';
import bubbleSort from '../sortingAlgorithms/bubbleSort';
import quickSort from '../sortingAlgorithms/quickSort';
import heapSort from '../sortingAlgorithms/heapSort';

function generateArray(min, max, number){
    let array = [];
    for(let i = 0; i< number; i++){
        array.push(generateNumber(min,max))
    }
    return array;
}

function SortingVisualizer(){
    const [min, max, number] = [5, 500, 100];
    let [values, setValues] = useState([]);

    useEffect(() => {
        setValues(generateArray(min, max, number));

    }, [min, max, number])


    const mergeSorting = () => {
        const anims = getMergeSortAnim(values);
        console.log(anims);
        for(let i = 0; i < anims.length; i++){
            const arrayValues = document.getElementsByClassName("array-value");
            const colorChange = i % 3 !== 2;
            if(colorChange){
                const [valueOne, valueTwo] = anims[i];
                const valueOneStyle = arrayValues[valueOne].style;
                const valueTwoStyle = arrayValues[valueTwo].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    valueOneStyle.background = color;
                    valueTwoStyle.background = color;
                }, i * 10)
                
            }else{
                setTimeout(() => {
                    const [valueOne, height] = anims[i];
                    const valueOneStyle = arrayValues[valueOne].style;
                    valueOneStyle.height = `${height}px`;
                }, i* 10)

            }

        }
    }

    const bubbleSorting = () => {
        const bubbleSortAnim = bubbleSort(values);
        for(let i = 0; i < bubbleSortAnim.length; i++){
            const arrayValues = document.getElementsByClassName("array-value");
            setTimeout(() => {
                const [value, height] = bubbleSortAnim[i];
                const valueStyle = arrayValues[value].style;
                valueStyle.height = `${height}px`;
            }, i * 10);
        }
    }

    const quickSorting = () => {
        const quickSortArray = quickSort(values, 0, values.length);
        console.log(quickSortArray);

    }

    const heapSorting = () => {
        const heapSortAnim = heapSort(values);
        console.log(values);
        console.log(heapSortAnim)
        for(let i = 0; i < heapSortAnim.length; i++){
            const arrayValues = document.getElementsByClassName("array-value");
            setTimeout(() => {
                const [value, height] = heapSortAnim[i];
                const valueStyle = arrayValues[value].style;
                valueStyle.height = `${height}px`;
            }, i * 3);
        }
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
                        </div>
        })}
        </section>
        <div>
            <button onClick={refreshArray}>Nouveau tableau</button>
            <button onClick={mergeSorting}>Merge Sort</button>
            <button onClick={quickSorting}>Quick Sort</button>
            <button onClick={heapSorting}>Heap Sort</button>
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