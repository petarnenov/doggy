import { makeAutoObservable } from "mobx";

class Store {
    data = {
        cars: [],
        isLoading: false,
        error: ''
    }
    filter = ''
    selectedItem = null

    constructor() {
        makeAutoObservable(this);
    }

    setData(data) {
        this.data = data;
    }
    setFilter(filter) {
        this.filter = filter;
    }
    setSelectedItem(selectedItem) {
        this.selectedItem = selectedItem;
    }
}

const store = new Store();

export default store;
