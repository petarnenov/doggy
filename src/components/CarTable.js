import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CarRow from "./CarRow";

const CarTable = () => {

    const dispatch = useDispatch();
    const { data, filter, selectedItem } = useSelector(state => state);

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
