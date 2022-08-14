import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "../hooks/useFetch";


const CarIsLoading = () => {

    const dispatch = useDispatch();
    useFetch(dispatch);

    const { isLoading } = useSelector(state => state.data);

    return isLoading ? <div>Data loading ...</div> : null;
}


export default CarIsLoading;
