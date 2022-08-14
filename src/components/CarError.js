import React from "react";
import { useStore } from "../store";

const CarError = () => {

    const error = useStore(state => state.data.error);   

    return error ? <div>{error}</div> : null
}

export default CarError;
