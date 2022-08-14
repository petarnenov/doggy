// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";

export const useFetch = (dispatch) => {   

    useEffect(() => {       
        dispatch({
            type: 'SET_DATA',
            payload: { isLoading: true, cars: [], error: '' }
        })
        fetch('http://localhost:3000/doggy/cars.json')
            .then(res => {              
                dispatch({
                    type: 'SET_DATA',
                    payload: { isLoading: false, cars: [], error: '' }
                })
                if (!res.ok) {
                    throw Error(res.statusText);
                };
                return res.json();
            })
            .then(data => {              
                dispatch({
                    type: 'SET_DATA',
                    payload: { error: "", cars: data, isLoading: false }
                })
            })
            .catch(e => {               
                dispatch({
                    type: 'SET_DATA',
                    payload: { error: e.message, cars: [], isLoading: false }
                })
            });
    }, [dispatch]);  
}