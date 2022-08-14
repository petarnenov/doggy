import React, { useContext } from "react";

const CarError = () => {

    const { data: { error } } = useContext();

    return error ? <div>{error}</div> : null
}

export default CarError;
