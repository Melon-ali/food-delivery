
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Header/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
