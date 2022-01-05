import Content from './Components/Content';
import './Components/css/app.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import SideMenu from './Components/SideMenu';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          
              <Header />

              <SideMenu />

              <Content />

              <Footer />

          <div className='col-12'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
