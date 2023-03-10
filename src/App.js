import './Components/Style.css'
import './App.css';
import Info from './Components/Info';
import Sidebar from './Components/Sidebar';

import Projects from '../src/Components/Projects'
import Services from '../src/Components/Services'
import Contact from '../src/Components/Contact'
import {
  Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    

    <div className='sidebar'>
        <nav>
        <i class="fa-brands fa-react"></i>
          <ul>
          
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to='/Services'>Services</Link></li>
            <li><Link to='/Contact'>Contact us</Link></li>
            <li><Link to='/Projects'>Projects</Link></li>
          </ul>
        </nav>
        <Routes>
  <Route path='/' element={<Info />} />
  <Route path='/projects' element={<Projects />} />
  <Route path='/services' element={<Services />} />
  <Route path='/contact' element={<Contact />} />
</Routes>

    </div>
    </div>
  );
}

export default App;
