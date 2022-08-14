import React from "react";
import store from "../store";
import { observer } from "mobx-react";

const CarError = () => {

    const error = store.data.error;

    return error ? <div>{error}</div> : null
}

export default observer(CarError);
