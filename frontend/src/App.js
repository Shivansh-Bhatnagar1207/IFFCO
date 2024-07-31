import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './components/Project';
import Report from './components/Report';
import Todo from './components/Todo';

function App() {
  return (
    <div className="flex ">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/project' element={<Project />} />
          <Route path='/task' element={<Todo />} />
          <Route path='/report' element={<Report/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
