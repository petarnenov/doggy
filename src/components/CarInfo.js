import React from "react";
import PropTypes from 'prop-types';
import { observer } from "mobx-react";

const CarInfo = ({ id, selectedItem }) => (
    <tr>
        <td>{id}</td>
        <td>{selectedItem[id]}</td>
    </tr>
)

CarInfo.propTypes = {
    id: PropTypes.string,
    selectedItem: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string
    })
}

export default observer(CarInfo);