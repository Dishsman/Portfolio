import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './tsx file/HomePage'
import FirstPage from './tsx file/FirstPage';
import About from './tsx file/AboutPage';
import ToolsPage from './tsx file/ToolsPage';
import Resume from './tsx file/Resume';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<FirstPage />} />
          <Route path="/About" element={<About/>} />
          <Route path="/ToolsPage" element={<ToolsPage/>} />
        </Route>
        <Route path="/Resume" element={<Resume/>} />
      </Routes>
    </Router>
  );
};

export default App
