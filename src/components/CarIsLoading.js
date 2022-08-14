import React from "react";

import { useFetch } from "../hooks/useFetch";
import { useStore } from "../store";

const CarIsLoading = () => {

    const setData = useStore(state => state.setData);
    useFetch(setData);
    
    const isLoading = useStore(state => state.data.isLoading);

    return isLoading ? <div>Data loading ...</div> : null;
}


export default CarIsLoading;
