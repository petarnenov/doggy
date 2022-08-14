import React, { useContext } from "react";

const CarFilter = () => {

    const { filter, setFilter } = useContext();

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
