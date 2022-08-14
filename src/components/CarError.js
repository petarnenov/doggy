import React from "react";
import store from "../store";

const CarError = () => {

    const error = store.data.error;

    return error ? <div>{error}</div> : null
}

export default CarError;
