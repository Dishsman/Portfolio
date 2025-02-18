import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './TsxFile/HomePage'
import FirstPage from './TsxFile/FirstPage';
import About from './TsxFile/AboutPage';
import ToolsPage from './TsxFile/ToolsPage';
import Resume from './TsxFile/Resume';


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
