import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './components/Project';
import Report from './components/Report';
import Todo from './components/Todo';
import NewReport from './components/NewReport';
import ReportDetials from './components/ReportDetials';
import UpdateProject from './components/UpdateProject';
import UpdateReport from './components/UpdateReport';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div className="flex ">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/project/Dashboard' element={<Dashboard />} />
          <Route path='/project' element={<Project />} />
          <Route path='/project/:id' element={<UpdateProject />} />
          <Route path='/task' element={<Todo />} />
          <Route path='/report' element={<Report />} />
          <Route path='/report/newreport' element={<NewReport />} />
          <Route path='/report/newreport/:id' element={<UpdateReport />} />
          <Route path='/report/reportdetail' element={<ReportDetials />} />
          <Route path='/profile/login' element={<Login />} />
          <Route path='/profile/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
