//Data Layer
// We need this to track the basket
import React, {createContext, useContext,useReducer} from  'react';

// This is the Data layer
export const StateContext = createContext();

//Provider
export const StateProvider=({reducer, initialState, children}) =>(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);