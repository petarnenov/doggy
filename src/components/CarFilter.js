import React from "react";
import { useStore } from "../store";


const CarFilter = () => {

    const filter = useStore(state => state.filter);
    const setFilter = useStore(state => state.setFilter);

    const handleChange = (e) => {
        e.preventDefault();
        //setFilter(e.target.value);
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
