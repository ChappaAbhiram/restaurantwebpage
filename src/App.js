import Header from './components/Layout/Header';
import {Fragment, useState} from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
function App() {
  const [cartisShown,setCartisShown] = useState(false);
  const showCartHandler = () =>{
    setCartisShown(true);
  };
  const HideCardHandler = () =>{
    setCartisShown(false);
  };
  return ( 
    <Fragment>
      {cartisShown && <Cart onClose={HideCardHandler}/>}
      <Header onShowCart={showCartHandler} onHideCart={HideCardHandler}/>
      <main>
      <Meals />
      </main>
    </Fragment>
  );
}

export default App;