
import './App.css';
import './Custom.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Router>
    <Header/>
    </Router>
    <Footer/>
    
    <h1>We will start our First React project!! testing</h1>
    </>
  );
}

export default App;
