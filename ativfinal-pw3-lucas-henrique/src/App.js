import Navbar from './components/navbar/navbar';
import Index from './pages/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
              <Route index element={<Index/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
