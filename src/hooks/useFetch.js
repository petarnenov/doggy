import { useEffect } from "react";

export const useFetch = (setData) => {

    useEffect(() => {
        setData({
            isLoading: true, cars: [], error: ''
        })
        fetch('http://localhost:3000/doggy/cars.json')
            .then(res => {
                setData({
                    isLoading: false, cars: [], error: ''
                })
                if (!res.ok) {
                    throw Error(res.statusText);
                };
                return res.json();
            })
            .then(data => {
                setData({
                    error: "", cars: data, isLoading: false
                })
            })
            .catch(e => {
                setData({
                    error: e.message, cars: [], isLoading: false
                })
            });
    }, [setData]);
}