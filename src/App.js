import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Categories from './components/Categories';
import Makers from './components/Makers';
import Header from './components/Header';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Categories />} />
          <Route path='/makers' element={<Makers />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
