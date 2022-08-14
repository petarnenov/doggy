import create from 'zustand';

export const useStore = create(set => ({
    data: {
        cars: [],
        isLoading: false,
        error: ''
    },
    filter: '',
    selectedItem: null,
    setData: (data) => set(state => ({
        ...state,
        data
    })),
    setFilter: (filter) => set(state => ({
        ...state,
        filter
    })),
    setSelectedItem: (selectedItem) => set(state => ({
        ...state,
        selectedItem
    }))
}))
