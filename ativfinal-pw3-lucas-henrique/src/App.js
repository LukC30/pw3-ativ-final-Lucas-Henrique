import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import SelectSala from './components/SelectSala'

function App() {
  useEffect(() => {
    handleItens();
  }, [])

  const [itens, setItens] = useState([]);

  function handleItens() {
    axios.get('http://localhost:5000/Salas')
      .then((response) => {
        setItens(response.data);
        console.log(itens);
      })
      .catch((error)=>{
        console.log("Sua aplicação deu erro amigão" + error);
      })

  }
  return (
    <div>
      <h1>
        Clique no botão para mostrar os itens no console:
      </h1>
      <section>
        <form>
          <SelectSala
          id='Salas'
          text='Selecione sua sala'
          label='veja todas as salas disponiveis'
          options={itens}
          />
        </form>
      </section>
    </div>
  );
}

export default App;
