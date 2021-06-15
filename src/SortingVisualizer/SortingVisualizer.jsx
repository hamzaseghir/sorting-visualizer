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

    const [min, max, number] = [1, 500, 100];
    let [values, setValues] = useState([]);

    useEffect(() => {
        setValues(generateArray(min, max, number));

    }, [min, max, number])


    const mergeSorting = () => {
        const anims = getMergeSortAnim(values);
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
        let sortedArray = values.sort((a,b) => a- b);
        let bubbleSortArray = bubbleSort(values);
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