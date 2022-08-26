import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} exact/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
