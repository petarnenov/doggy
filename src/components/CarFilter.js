import React, { useContext } from "react";

import { CarContext } from '../CarProvider';

const CarFilter = () => {

    const { state: { filter }, dispatch } = useContext(CarContext);

    const handleChange = (e) => {
        e.preventDefault();
        //setFilter(e.target.value);
        dispatch({
            type: "SET_FILTER",
            payload: e.target.value
        })
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
