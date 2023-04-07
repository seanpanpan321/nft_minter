import { HStack } from "@chakra-ui/react";
import React, { Component, useState } from 'react'
interface total{
    count: number
}

export default function Counter(): JSX.Element {

    const [count, setCounter] = useState(0);
    const state: total = { count: 0 };
    
    const increment = (): any => {
        setCounter(count+1);
        console.log(state);
    };
    
    const decrement = (): any => {
        if (count > 0)
            setCounter(count-1);
            console.log(state);
    };
    return (
        <div>
          <HStack>
            <button onClick={increment} className = "btn btn-primary">+</button>
            <div key={count}>{count}</div>
            <button onClick={decrement} className = "btn btn-primary">-</button>
          </HStack>
        </div>
      );
    }