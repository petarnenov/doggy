import React from "react";
import { useStore } from "../store";

import CarInfo from "./CarInfo";

const CarSelectedItem = () => {

    const selectedItem = useStore(state => state.selectedItem); 

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
