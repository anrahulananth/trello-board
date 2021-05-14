import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import initialState from './initialState';
import Header from './components/header';
import ListContainer from './components/listContainer'

const App = () =>  {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateState = (data) => {
      dispatch({
        type: 'SET_LIST',
        payload: data
      });
    };
    const stateData = JSON.parse(localStorage.getItem('lists'));
    if(!stateData) {
      // using initial data from constants file of localstorage is not set
      localStorage.setItem('lists', JSON.stringify(initialState.lists));
      updateState(initialState.lists);
    } else {
      // using data from localstorage if already present
      updateState(stateData);
    }
  }, [dispatch]);

  return (
    <div className="App">
        <Header />
        <ListContainer />
    </div>
  );
}

export default App;
