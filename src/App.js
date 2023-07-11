import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default App;
