import Header from './components/Layout/Header';
import { useState} from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider';
function App() {
  const [cartisShown,setCartisShown] = useState(false);
  const showCartHandler = () =>{
    setCartisShown(true);
  };
  const HideCardHandler = () =>{
    setCartisShown(false);
  };
  return ( 
    <CartProvider>
      {cartisShown && <Cart onClose={HideCardHandler}/>}
      <Header onShowCart={showCartHandler} onHideCart={HideCardHandler}/>
      <main>
      <Meals />
      </main>
    </CartProvider>
  );
}

export default App;