import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Counter = () => {
    const placeItem = parseInt(localStorage.getItem('counter'), 10)
    const [counter, setCounter] = useState(placeItem);

    useEffect(() => {
        localStorage.setItem('counter', counter.toString());
    }, [counter]);

    const handleIncrement = () => {
        setCounter((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
        setCounter((prevCount) => prevCount - 1);
    };

    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <span>{counter}</span>
            <button onClick={handleDecrement}>-</button>

            <Link to="/forms">Form</Link>
            <Link to='/weather'>Weather</Link>
        </div>
    );
};

export default Counter;
