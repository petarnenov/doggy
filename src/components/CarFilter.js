import React from "react";
import store from "../store";
import { observer } from "mobx-react";

const CarFilter = () => {

    const filter = store.filter;   

    const handleChange = (e) => {
        e.preventDefault();        
        store.setFilter(e.target.value);
    }

    return (
        <>
            <h1 className="title">
                Car Search
            </h1>
            <input
                type="text"
                value={filter}
                onChange={handleChange} />
        </>
    )
}

export default observer(CarFilter);
