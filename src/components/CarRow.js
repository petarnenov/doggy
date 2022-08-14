import React from "react";
import PropTypes from 'prop-types';

const CarRow = ({ car, onSelect }) => (
    <tr>
        <td>{car.name}</td>
        <td>{car.type}</td>
        <td>
            <button onClick={(e) => onSelect(e, car)}>
                Select!
            </button>
        </td>
    </tr>
)

CarRow.propTypes = {
    car: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string
    }),
    onSelect: PropTypes.func.isRequired
}

export default CarRow;