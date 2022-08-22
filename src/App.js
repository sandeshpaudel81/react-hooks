import './App.css';
import React, {useState} from 'react';
function App() {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(count+1);
    }
    const decrementHandler = () => {
        setCount(count-1);
    }
    const resetHandler = () => {
        setCount(0);
    }


    return (
        <div className="App">
            <div className="counter">
                <h1>Count: {count}</h1>
                <button className='btn' onClick={decrementHandler}>-1</button>
                <button className='btn' onClick={incrementHandler}>+1</button>
                <br></br>
                <button className='btn' onClick={resetHandler}>Reset</button>
            </div>
        </div>
    );
}

export default App;
