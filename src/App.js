import { useState } from 'react';

import CarContext from './CarContext';

import CarIsLoading from './components/CarIsLoading';
import CarFilter from './components/CarFilter';
import CarTable from './components/CarTable';
import CarSelectedItem from './components/CarSelectedItem';
import CarError from './components/CarError';

import { useFetch } from './hooks/useFetch';

import './App.css';

function App() {

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
    }}>
      <div className='app'>
        <CarIsLoading />
        <CarFilter />
        <CarTable />
        <CarSelectedItem />
        <CarError />
      </div>
    </CarContext.Provider>
  );
}

export default App;
