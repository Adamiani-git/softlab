import './Components/css/app.css'
import Timer from './Components/Timer';
// import Content from './Components/Content';
// import Footer from './Components/Footer';
// import Header from './Components/Header';
// import SideMenu from './Components/SideMenu';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row justify-content-center align-items-end'>
          <Timer />

        </div>
      </div>
    </div>
  );
}

export default App;
