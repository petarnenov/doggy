import React from "react";
import PropTypes from 'prop-types';

const CarInfo = ({ id, selectItem }) => (
    <tr>
        <td>{id}</td>
        <td>{selectItem[id]}</td>
    </tr>
)

CarInfo.propTypes = {
    id: PropTypes.string,
    selectItem: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string
    })
}

export default CarInfo;