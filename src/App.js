import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
