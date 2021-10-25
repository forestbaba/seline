import React, {createContext, useState, useReducer } from 'react';

export const PlayContext = createContext();


const PlayContextProvider =(props) => {
    const [age, setAge] = useState(0)

    const addOne=()=> {
        console.log('Working==*************************')
        age + 1
    }

    return (
        <PlayContext.Provider value={{addOne}}>
            {props.children}
        </PlayContext.Provider>
    )
}

export default PlayContextProvider;