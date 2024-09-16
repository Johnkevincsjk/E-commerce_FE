
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage/HomePage.jsx'
import Queens from './Components/Pages/Queens/Queens.jsx';
import Prince from './Components/Pages/Prince/Prince.jsx';
import Carts from './Components/Pages/CartsPage/Carts.jsx';
import { Provider } from 'react-redux'
import store from './redux/Store.js';
import Single_product from './Components/Pages/Single_product/Single_product.jsx';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (

    <Provider store={store}>

      <div className="App">

        <section>

          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/search' Component={HomePage} />
            <Route path='/Queens' Component={Queens} />
            <Route path='/Kids' Component={Prince} />
            <Route path='/AddCart' Component={Carts} />
            <Route path='/product/:id' element={<Single_product />} />
          </Routes>


        </section>
       
      </div>
      <ToastContainer />
    </Provider>

  );
}

export default App;
