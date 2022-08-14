import React, { useContext } from "react";

import { CarContext } from '../CarProvider';

const CarError = () => {

    const { data: { error } } = useContext(CarContext);

    return error ? <div>{error}</div> : null
}

export default CarError;
