import React from "react";
import { useSelector } from "react-redux";


const CarError = () => {

    const { error } = useSelector(state => state.data)

    return error ? <div>{error}</div> : null
}

export default CarError;
