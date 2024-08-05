import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login'
import GeneralChat from "./Pages/GeneralChat"
import TopNav from './Pages/Landing/Components/TopNav';
import Footer from './Pages/Landing/Components/Footer';
// import Translate from "./Pages/Translate/index";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav/>
        <Routes>
          <Route path="/" Component={Landing}/>
          <Route path="login" Component={Login} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
        <GeneralChat/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
