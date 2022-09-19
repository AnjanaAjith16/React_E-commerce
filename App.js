import './App.css';
import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Header from './Components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Products from './Pages/Products';

function App() {
  return (
    <div className='App'>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Outlet />}>
            <Route path=":category" element={<Products />} />
            <Route path=':category/:slug' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;












  // const [theme, setTheme] = useState({
  //   color: 'black',
  //   backgroundColor: "#d0e1e1",
  //   mode: 'light',
  //   textColor: 'dark',
  // });

  // const setDarkTheme = () => {
  //   if (theme.color === 'black') {
  //     setTheme({
  //       color: 'white',
  //       backgroundColor: '#1a1a1a',
  //       borderColor: 'white',
  //       textColor: 'light',
  //       mode: 'dark',
  //     })
  //   }
  // };

  // const setLightTheme = () => {
  //   if (theme.color === 'white') {
  //     setTheme({
  //       color: 'black',
  //       backgroundColor: ' #d0e1e1',
  //       textColor: 'dark',
  //       mode: 'light',
  //     })
  //   }
  // };

  // function modifyCategory(c) {
  //   setCategory((category) => c);
  // }


// const [category, setCategory] = useState("");

    // cartItems = cartItems.filter(i => {
    //   return i.id !== id;
    // });

  // const [productsData, setProductsData] = useState([]);

  // const addProductsData = (p) => {
  //   setProductsData((productsData) => p);
  // }


// const cartItems = proxy({ id: 0, title:"", quantity:"", price:""});
// const cartItems = proxy( { obj: [{ id: "", title:"", quantity:0, unitPrice: 0, totalPrice:0} ]});

          // <Route path=':category/:slug' element={ <Product theme={theme} cartItems={cart} addToCart={addItem} /> } />
          //   </Route>
          //   <Route path="/cart" element={<Cart theme={theme} cartItems={cart} removeItem={removeItem} />}/>


  // const addToCart = (product , quantity, totalPrice) => {
  //   cartItems.obj.id = product.id;
  //   cartItems.obj.title = product.title;
  //   cartItems.obj.unitPrice = product.price;
  //   cartItems.obj.quantity = quantity;
  //   cartItems.obj.totalPrice = totalPrice;
  //   navigate('/cart');
  // }
  // const addToCart = (product, quantity, totalPrice) => {
  //   // cartItems.id = product.id;
  //   // cartItems.title = product.title;
  //   // cartItems.unitPrice = product.price;
  //   // cartItems.quantity = quantity;
  //   // cartItems.totalPrice = totalPrice;
  //   navigate('/cart');
  // }


  // const addToCart = (product , quantity, price) => {
  //     cartItems.id = product.id;
  //     cartItems.title = product.title;
  //     cartItems.quantity = quantity;
  //     cartItems.price = price;
  //     navigate('/cart');
  // }

  // subscribe(cartItems, () => {
  //   console.log('State changed to', cartItems);
  // });

  // const snap = useSnapshot(cartItems);






              // {/* <Route path="fashion" element={ <Fashion theme={theme}/> } /> */}
             // {/* <Route path="fashion/:slug" element={ <Product theme={theme}/> } /> */}
             // {/* <Route path="books" element={ <Books theme={theme}/> } /> */}
             // {/* <Route path='books/:slug' element={ <Product theme={theme}/> } /> */}
