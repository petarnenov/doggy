import React from "react";
import { useStore } from "../store";

import CarRow from "./CarRow";

const CarTable = () => {

    const data = useStore(state => state.data);
    
    const filter = useStore(state => state.filter);
    const selectedItem = useStore(state => state.selectedItem)
    const setSelectedItem = useStore(state => state.setSelectedItem);

    const handleSelect = (e, car) => {
        e.preventDefault();
        const payload = car === selectedItem ? null : car;
        setSelectedItem(payload)
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
