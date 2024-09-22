
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage/HomePage.jsx'
import Queens from './Components/Pages/Queens/Queens.jsx';
import Prince from './Components/Pages/Prince/Prince.jsx';
import Carts from './Components/Pages/CartsPage/Carts.jsx';
import { Provider, useSelector } from 'react-redux'
import store from './redux/Store.js';
import Single_product from './Components/Pages/Single_product/Single_product.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Pages/LoginPage/Login.jsx';
import Signin from './Components/Pages/SigninPage/Signin.jsx';

function App() {

  const isLoggedin = useSelector((state) => state.Auth.isLoggedin);


  return (


    <div className="App">

      <section>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/search' element={<HomePage />} />
          <Route path='/Queens' element={<Queens />} />
          <Route path='/Kids' element={<Prince />} />
          <Route path='/AddCart' element={<Carts />} />
          <Route path='/product/:id' element={<Single_product />} />
        </Routes>


      </section>

      <ToastContainer />
    </div>


  );
}

export default App;
