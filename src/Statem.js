import { useState } from 'react';

function Statem() {
    const [number, setNumber] = useState(0)


    const handleClickPositive = () => {

        setNumber(prevNumber => prevNumber + 1);
    }


    const handleClickNegative = () => {
        if (number <= 0) {
            setNumber(0)
        } else {
            setNumber(prevNumber => prevNumber - 1);
        }
    }
    return (
        <div className="App">
            <h1>This is a useState example</h1>
            <button type='button' onClick={handleClickPositive}>+</button>
            <span>{number}</span>
            <button onClick={handleClickNegative}>-</button>



        </div>
    );
}

export default Statem;
