
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboardpage from './pages/Dashboardpage';


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboardpage />}></Route>

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
