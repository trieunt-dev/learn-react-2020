import React, { useState, useEffect } from 'react';
import DisplayItem from './DisplayItem';

const LifeCycleFunction = () => {
    const [counter, setCounter] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        console.log('useEffect() counter running');
    }, [counter]);

    useEffect(() => {
        console.log('useEffect() isVisible running');
    }, [isVisible]);

    console.log('render() running...');
    return (
        <>
            <h1>Lifecycle Hooks</h1>
            <h2>Couter: {counter}</h2>
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Counter
            </button>
            <button
                onClick={() => {
                    setIsVisible(!isVisible);
                }}
            >
                Toggle Button
            </button>
            {isVisible && <DisplayItem />}
        </>
    ); // Tương ứng với render
};

export default LifeCycleFunction;
