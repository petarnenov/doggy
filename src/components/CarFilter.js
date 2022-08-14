import React from "react";
import { useDispatch, useSelector } from "react-redux";


const CarFilter = () => {

    const dispatch = useDispatch();
    const { filter } = useSelector(state => state);

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
