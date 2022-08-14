import { useEffect, useState } from "react";

const initState = {
    isLoading: false,
    cars: [],
    error: null
}

export const useFetch = () => {
    const [data, setData] = useState(initState);

    useEffect(() => {
        setData(prev => ({
            ...prev,
            isLoading: true
        }));
        fetch('http://localhost:3000/doggy/cars.json')
            .then(res => {
                setData(prev => ({
                    ...prev,
                    isLoading: false
                }))
                if (!res.ok) {
                    throw Error(res.statusText);
                };
                return res.json();
            })
            .then(data => {
                setData(prev => ({
                    ...prev,
                    error: null,
                    cars: data
                }));
            })
            .catch(e => setData(prev => (
                {
                    ...prev,
                    error: e.message
                }
            )));
    }, []);

    return [data];
}