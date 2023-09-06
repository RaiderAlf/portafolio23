//IMPORTS
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//COMPONENTS
import NavBar from './components/NavBar';
import About from './components/About';
import Proyects from './components/Proyects';
import Contact from './components/Contact';


function App() {

  return (
    <>
      <NavBar />
      <About />
      <Proyects />
      <Contact />
    </>
  )
}

export default App
