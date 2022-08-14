import React, { useContext } from "react";

import CarContext from '../CarContext';
import CarInfo from "./CarInfo";

const CarSelectedItem = () => {

    const { selectItem } = useContext(CarContext);

    return selectItem ?
        <div>
            <h2>{selectItem.name}</h2>
            <table>
                <tbody>
                    {Object.keys(selectItem).map((key, index) => (
                        <CarInfo id={key} selectItem={selectItem} key={[index, key, selectItem[key]].join(':')} />
                    ))}
                </tbody>
            </table>
        </div>
        : null
}

export default CarSelectedItem;
