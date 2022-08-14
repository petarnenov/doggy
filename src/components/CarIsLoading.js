import React, { useContext } from "react";

import { CarContext } from '../CarProvider';

const CarIsLoading = () => {

    const { data: { isLoading } } = useContext(CarContext);

    return isLoading ? <div>Data loading ...</div> : null;
}


export default CarIsLoading;
