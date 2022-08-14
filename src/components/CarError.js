import React from "react";
import PropTypes from 'prop-types';

const CarError = ({ error }) => {
    return error ? <div>{error}</div> : null
}

CarError.propTypes = {
    error: PropTypes.string
}

export default CarError;
