import { Provider } from 'react-redux';

import store from "./store";
import CarIsLoading from './components/CarIsLoading';
import CarFilter from './components/CarFilter';
import CarTable from './components/CarTable';
import CarSelectedItem from './components/CarSelectedItem';
import CarError from './components/CarError';

import './App.css';

function App() {  
  return (
    <Provider store={store}>
      <div className='app'>
        <CarIsLoading />
        <CarFilter />
        <CarTable />
        <CarSelectedItem />
        <CarError />
      </div>
    </Provider>
  );
}

export default App;
