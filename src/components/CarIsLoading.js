import React from "react";
import { useFetch } from "../hooks/useFetch";
import store from "../store";

const CarIsLoading = () => {

    useFetch(store.setData);

    const isLoading = store.data.isLoading;

    return isLoading ? <div>Data loading ...</div> : null;
}


export default CarIsLoading;
