import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import Welcome from './components/Welcome';
import Project from './components/Project';
import Task from './components/Task';

function App() {
  return (
    <div className="flex ">
      <Router>
        <Home />
        <Routes>
          <Route path='/*' element={<Welcome/>}/>
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/project' element={<Project />} />
          <Route path='/task' element={<Task />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
