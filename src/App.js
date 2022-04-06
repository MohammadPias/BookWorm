import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import DashboardHome from './components/Dashboard/DashboardHome/DashboardHome';
import Order from './components/Dashboard/Order/Order';
import AddBooks from './components/Dashboard/AddBooks/AddBooks';
import ManageOrder from './components/Dashboard/ManageOrder/ManageOrder';
import { toast } from 'react-toastify';
import Discover from './components/Discover/Discover';

toast.configure()
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='discover' element={<Discover />} >

        </Route>
        <Route path='dashboard' element={<DashboardHome />} >
          <Route index path='addBook' element={<AddBooks />} />
          <Route index path='order' element={<Order />} />
          <Route path='manageOrder' element={<ManageOrder />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
