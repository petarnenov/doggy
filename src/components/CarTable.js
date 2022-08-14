import React from "react";
import store from "../store";

import CarRow from "./CarRow";

const CarTable = () => {

    const data = store.data;
    
    const filter = store.filter;
    const selectedItem = store.selectedItem    

    const handleSelect = (e, car) => {
        e.preventDefault();
        const payload = car === selectedItem ? null : car;
        store.setSelectedItem(payload)
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
