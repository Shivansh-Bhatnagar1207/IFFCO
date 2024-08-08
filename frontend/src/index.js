import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProjectContextProvider } from './Contexts/ProjectContext';
import { ReportContextProvider } from './Contexts/ReportContext';
import { AuthContextProvider } from './Contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ProjectContextProvider>
      <ReportContextProvider>
        <App />
      </ReportContextProvider>
    </ProjectContextProvider>
  </AuthContextProvider>
);

