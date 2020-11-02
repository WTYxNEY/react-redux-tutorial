import './App.css';
import React from 'react'
import CakeContainer from './compontents/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './compontents/HooksCakeContainer';
import IceCreamContainer from './compontents/IceCreamContainer';
import NewCakeContainer from './compontents/NewCakeContainer';
import NewHookIceCreamContainer from './compontents/NewHookIceCreamContainer';
import ItemContainer from './compontents/ItemContainer';
import UserContainer from './compontents/UserContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      {/* <ItemContainer cake/>
      <ItemContainer />
        <HooksCakeContainer/>
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer/>
        <NewHookIceCreamContainer/> */}
        <UserContainer/>
        
      </div>
    </Provider>
  );
}

export default App;
