import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Footer from './components/footer/Footer';
import NavBar from './components/nav-bar/NavBar';
import Contancts from './pages/Contacts';
import Home from './pages/Home';
import Project from './pages/Project';
import Projects from './pages/Projects';

import './css/main.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/projects' element={ <Projects/> } />
          <Route path='/project/:id' element={ <Project/> } />
          <Route path='/contacts' element={ <Contancts/> } />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
