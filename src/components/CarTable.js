import React, { useContext } from "react";

import { CarContext } from '../CarProvider';

import CarRow from "./CarRow";

const CarTable = () => {

    const { state: { data, filter, selectedItem }, dispatch } = useContext(CarContext);

    const handleSelect = (e, car) => {
        e.preventDefault();
        const payload = car === selectedItem ? null : car;
        dispatch({ type: "SET_SELECTED_ITEM", payload })
    }

    return (
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
    )
}

export default CarTable;
