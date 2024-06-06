import Navbar from './components/navbar/navbar';
import Index from './pages/Index'
import ListarTurmas from './pages/ListagemTurmas';
import EditarTurmas from './pages/EditarTurmas'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
              <Route index element={<Index/>}/>
              <Route path='/ListarTurmas' element={<ListarTurmas/>}/>
              <Route path='/EditarTurma/:id' element={<EditarTurmas/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
