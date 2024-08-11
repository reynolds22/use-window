import React from "react";
import {useState} from "react";
import { useLayoutEffect } from "react";

function UseWindow(){

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    })

    function handleResize(){
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
        return windowSize;
    }

    useLayoutEffect(()=>{

        handleResize()

        window.addEventListener('resize', handleResize)

        return ()=>{
            window.addEventListener('resize', handleResize)
        }
    
    },[]);

    return windowSize;
};

export default UseWindow;