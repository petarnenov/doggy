import React, { useReducer } from "react";
import { useFetch } from "./hooks/useFetch";

export const CarContext = React.createContext({});

const carReducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA": {
            return {
                ...state,
                data: action.payload
            }
        }
        case "SET_FILTER": {
            return {
                ...state,
                filter: action.payload
            }
        }
        case "SET_SELECTED_ITEM": {
            return {
                ...state,
                selectedItem: action.payload
            }
        }
        default: {
            throw Error(`unsupported action type ${action.type}`)
        }
    }
}

const CarProvider = ({ children }) => {

    const [state, dispatch] = useReducer(carReducer, {
        data: {
            cars: [],
            error: '',
            isLoading: false
        },
        filter: '',
        selectedItem: null
    })    
    useFetch(dispatch);

    return (
        <CarContext.Provider value={{            
            state,
            dispatch
        }}
        >
            {children}
        </CarContext.Provider>
    )
}

export default CarProvider;