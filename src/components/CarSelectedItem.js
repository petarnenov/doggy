import React, { useContext } from "react";

import { CarContext } from '../CarProvider';
import CarInfo from "./CarInfo";

const CarSelectedItem = () => {

    const { state: { selectedItem } } = useContext(CarContext);

    return selectedItem ?
        <div>
            <h2>{selectedItem.name}</h2>
            <table>
                <tbody>
                    {Object.keys(selectedItem).map((key, index) => (
                        <CarInfo id={key} selectedItem={selectedItem} key={[index, key, selectedItem[key]].join(':')} />
                    ))}
                </tbody>
            </table>
        </div>
        : null
}

export default CarSelectedItem;
