import React, { useContext } from "react";

import { CarContext } from '../CarProvider';

const CarError = () => {

    const { state: { data: { error } } } = useContext(CarContext);    

    return error ? <div>{error}</div> : null
}

export default CarError;
