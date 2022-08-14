import React, { useContext } from "react";

import { CarContext } from '../CarProvider';

const CarFilter = () => {

    const { filter, setFilter } = useContext(CarContext);

    const handleChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    }

    return (
        <>
            <h1 className="title">
                Car Search
            </h1>
            <input
                type="text"
                value={filter}
                onChange={handleChange} />
        </>
    )
}

export default CarFilter;
