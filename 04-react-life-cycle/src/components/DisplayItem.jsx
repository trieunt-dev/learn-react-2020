import React, { useEffect } from 'react';

const DisplayItem = () => {
    useEffect(() => {
        console.log('useEffect DisplayItem');
        return () => console.log('useEffect unmounting...');
    });

    return <h1>DisplayItem</h1>;
};

export default DisplayItem;
