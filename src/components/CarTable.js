import React from "react";
import PropTypes from "prop-types";
import CarRow from "./CarRow";

const CarTable = ({ data, filter, handleSelect }) => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            {data.cars.filter(car => car.name.toLowerCase().includes(filter.toLowerCase())).map(car => (
                <CarRow car={car} onSelect={handleSelect} key={[car.name, car.type].join(':')} />
            )
            )}
        </tbody>
    </table>
);

CarTable.propTypes = {
    data: PropTypes.shape({
        car: PropTypes.shape({
            name: PropTypes.string,
            type: PropTypes.string
        }),
        isLoading: PropTypes.bool,
        error: PropTypes.string
    }),
    filter: PropTypes.string,
    handleSelect: PropTypes.func
}

export default CarTable;
