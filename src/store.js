import { legacy_createStore } from "redux";

const initialState = {
    data: {
        cars: [],
        isLoading: false,
        error: ''
    },
    filter: '',
    selectedItem: null
}

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DATA": {
            return {
                ...state,
                data: action.payload
            }
        }
        case "SET_FILTER": {
            return {
                ...state,
                filter: action.payload
            }
        }
        case "SET_SELECTED_ITEM": {
            return {
                ...state,
                selectedItem: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

const store = legacy_createStore(carReducer);

export default store;

