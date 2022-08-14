import React from "react";
import PropTypes from 'prop-types';

const CarIsLoading = ({ data: { isLoading } }) => {
    return isLoading ? <div>Data loading ...</div> : null;
}

CarIsLoading.propTypes = {
    isLoading: PropTypes.bool
}

export default CarIsLoading;