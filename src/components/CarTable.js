import React, { useContext } from "react";

import CarRow from "./CarRow";

const CarTable = () => {

    const { selectItem, setSelectItem, data, filter } = useContext();

    const handleSelect = (e, car) => {
        e.preventDefault();
        car === selectItem ? setSelectItem(null) : setSelectItem(car);
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
