import './App.css';
import React, {useState, useEffect, useRef} from 'react';
function App() {
    const [count, setCount] = useState(0);
    // useRef is used as a reference to the static part without getElementById
    const titleref = useRef();

    const colors = ["black", "blue", "green", "red", "yellow", "white", "pink", "orange"]

    const incrementHandler = () => {
        setCount(count+1);
    }
    const decrementHandler = () => {
        setCount(count-1);
    }
    const resetHandler = () => {
        setCount(0);
    }
    useEffect(() => {
        // useEffect runs on render and also when state of dependency changes eg. when count changes
        console.log("run with render");
        titleref.current.style.color = colors[Math.floor(Math.random()*colors.length)];
    }, [count]);

    return (
        <div className="App">
            <div className="counter">
                <h4 ref={titleref}>Learning Important Hooks</h4>
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
