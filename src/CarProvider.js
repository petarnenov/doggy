import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";

export const CarContext = React.createContext({});

const CarProvider = ({ children }) => {

    const [data] = useFetch();
    const [filter, setFilter] = useState("");
    const [selectItem, setSelectItem] = useState(null);

    return (
        <CarContext.Provider value={{
            data,
            filter,
            setFilter,
            selectItem,
            setSelectItem
        }}
        >
            {children}
        </CarContext.Provider>
    )
}

export default CarProvider;