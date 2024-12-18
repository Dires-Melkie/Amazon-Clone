import { createContext, useReducer } from "react";


export const DataContext = createContext()

export const DataProvider =({children,reducer,initialState})=>{
    return(
        <DataProvider.Provider value={useReducer(reducer,initialState)}>
            {children}
        </DataProvider.Provider>
    )
}