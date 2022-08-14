import { useEffect, useState } from 'react';
import hash from 'object-hash';

import CarIsLoading from './components/CarIsLoading';
import CarFilter from './components/CarFilter';
import CarTable from './components/CarTable';
import CarSelectedItem from './components/CarSelectedItem';
import CarError from './components/CarError';

import './App.css';

const initState = {
  isLoading: false,
  cars: [],
  error: null
}

function App() {

  const [data, setData] = useState(initState);
  const [filter, setFilter] = useState("");
  const [selectItem, setSelectItem] = useState(null);

  const handleSelect = (e, car) => {
    e.preventDefault();   
    car === selectItem ? setSelectItem(null) :setSelectItem(car);
  }

  useEffect(() => {
    setData(prev => ({
      ...prev,
      isLoading: true
    }));
    fetch('http://localhost:3000/doggy/cars.json')
      .then(res => {
        setData(prev => ({
          ...prev,
          isLoading: false
        }))
        if (!res.ok) {
          throw Error(res.statusText);
        };
        return res.json();
      })
      .then(data => {
        setData(prev => ({
          ...prev,
          error: null,
          cars: data
        }));
      })
      .catch(e => setData(prev => (
        {
          ...prev,
          error: e.message
        }
      )));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  }

  return (
    <div className='app'>
      <CarIsLoading isLoading={data.isLoading} />
      <CarFilter filter={filter} handleChange={handleChange} />
      <CarTable data={data} filter={filter} handleSelect={handleSelect} />
      <CarSelectedItem selectItem={selectItem} />
      <CarError error={data.error} />
    </div>
  );
}

export default App;
