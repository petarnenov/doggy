import "./store";
import CarIsLoading from './components/CarIsLoading';
import CarFilter from './components/CarFilter';
import CarTable from './components/CarTable';
import CarSelectedItem from './components/CarSelectedItem';
import CarError from './components/CarError';

import './App.css';

function App() {  
  return (  
      <div className='app'>
        <CarIsLoading />
        <CarFilter />
        <CarTable />
        <CarSelectedItem />
        <CarError />
      </div>   
  );
}

export default App;
