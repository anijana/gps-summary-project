import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Summary from './components/gpsSummary/Summary';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Summary' element={<Summary />}/>
      </Routes>
    </div>
  );
}

export default App;
