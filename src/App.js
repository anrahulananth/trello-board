import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import initialState from './initialState';
import Header from './components/header';
import ListContainer from './components/listContainer'

const App = () =>  {
  const dispatch = useDispatch();
  const updateState = (key, data) => {
    if (key === 'lists') {
      dispatch({
        type: 'SET_LIST',
        payload: data
      });
    } else {
      dispatch({
        type: 'SET_LIST_ITEM',
        payload: data
      });
    }
  };

  useEffect(() => {
    Object.keys(initialState).forEach((key) => {
        const stateData = JSON.parse(localStorage.getItem(key));
        if(!stateData) {
          // using initial data from constants file of localstorage is not set
          console.log(initialState[key], JSON.stringify(initialState[key]));
          localStorage.setItem(key, JSON.stringify(initialState[key]));
          updateState(key, initialState[key]);
        } else {
          // using data from localstorage if already present
          updateState(key, stateData);
        }
    }); 
  }, []);

  return (
    <div className="App">
          <Header />
          <ListContainer />
    </div>
  );
}

export default App;
