import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Welcome from './components/Welcome';
import Project from './components/Project';
import Task from './components/Task';

function App() {
  return (
    <div className="flex ">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/project' element={<Project />} />
          <Route path='/task' element={<Task />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
