import React from "react";
import PropTypes from "prop-types";

const CarFilter = ({ filter, handleChange }) => (
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

CarFilter.propTypes = {
    filter: PropTypes.string,
    handleChange: PropTypes.func
}

export default CarFilter;
