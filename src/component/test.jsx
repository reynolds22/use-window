import React from 'react';
import UseWindow from '.';

export default function UseWindowResizeTest(){

    const windowSize = UseWindow();
    const {width, height} = windowSize;

    return (
        <div>
            <h1>Use Window Hook</h1>
            <p>Width is {width}</p>
            <p>Height is {height}</p>
        </div>
    );
}