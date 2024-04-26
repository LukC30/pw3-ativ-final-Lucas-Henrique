import Navbar from './components/navbar/navbar';
import Index from './pages/Index'
import ListagemAlunos from './pages/ListagemAlunos';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
              <Route index element={<Index/>}/>
              <Route path='/ListarAlunos' element={<ListagemAlunos/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
