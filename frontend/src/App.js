import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login'
import GeneralChat from "./Pages/GeneralChat"
import TopNav from './Pages/Landing/Components/TopNav';
// import Translate from "./Pages/Translate/index";

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Landing/>
      <GeneralChat/>
    </div>
  );
}

export default App;
