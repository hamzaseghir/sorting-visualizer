import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './SortingVisualizer.css';
import React from 'react';

function SortingVisualizer(){

    let values = useState([]);
    generateArray(1,500);
    // Déclare une nouvelle variable d'état, que nous appellerons « count »
    const [count, setCount] = useState(0);

    return (
    <>  
        <section className="array-container">
        {values.map((element, index)=> {
            return <div 
                        className="array-value" 
                        key={index}
                        style={{ height:`${element}px`}}>       
                        </div>
        })}
        </section>
        <div>
            <p>Nouveau Tableau</p>
            <button onClick={generateArray(1,500)}>
            Cliquez ici
            </button>
        </div>
    </>
   
    );

    function generateArray(min, max){
        let array = [];
        for(let i = 0; i< 10; i++){
            array.push(generateNumber(min,max))
        }
        values = array;
        return values;
    }
    
}


// Generate a number in the interval [min, max[
function generateNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

export default SortingVisualizer;