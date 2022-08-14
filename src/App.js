
import CarProvider from './CarProvider';
import CarIsLoading from './components/CarIsLoading';
import CarFilter from './components/CarFilter';
import CarTable from './components/CarTable';
import CarSelectedItem from './components/CarSelectedItem';
import CarError from './components/CarError';

import './App.css';

function App() {
  return (
    <CarProvider>
      <div className='app'>
        <CarIsLoading />
        <CarFilter />
        <CarTable />
        <CarSelectedItem />
        <CarError />
      </div>
    </CarProvider>
  );
}

export default App;
