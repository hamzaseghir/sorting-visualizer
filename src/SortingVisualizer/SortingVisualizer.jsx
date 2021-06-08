import { useEffect, useState } from 'react';
import './SortingVisualizer.css';
import React from 'react';

function SortingVisualizer(){

    let [values, setValues] = useState([]);
    //values = generateArray(1,500);

    console.log(values);

    useEffect(() => {
        console.log("render");   
        setValues(generateArray(1,500));
    }, [values])

    function generateArray(min, max){
        let array = [];
        for(let i = 0; i< 10; i++){
            array.push(generateNumber(min,max))
        }
        return array;
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
            <p>Nouveau Tableau</p>
            <button onClick={() => values = generateArray(1,500)}>
            Cliquez ici
            </button>
        </div>
    </> 
    ); 
}


// Generate a number in the interval [min, max[
function generateNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

export default SortingVisualizer;