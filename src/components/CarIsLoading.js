import React, { useContext } from "react";

import { CarContext } from '../CarProvider';

const CarIsLoading = () => {

    const { state: { data: { isLoading } } } = useContext(CarContext);

    return isLoading ? <div>Data loading ...</div> : null;
}


export default CarIsLoading;
