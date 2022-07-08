import './App.css';
import SignUp from './Pages/SignUp/signup';
import Dashboard from './Pages/Dashboard/dashboard';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
    <Routes>
          <Route exact path="/" element={<SignUp/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </div>
  );
}

export default App;
