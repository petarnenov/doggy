import React from "react";
import PropTypes from 'prop-types';

import CarInfo from "./CarInfo";

const CarSelectedItem = ({selectItem }) => {
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

CarSelectedItem.propTypes = {
    selectItem: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string
    })
}

export default CarSelectedItem;
