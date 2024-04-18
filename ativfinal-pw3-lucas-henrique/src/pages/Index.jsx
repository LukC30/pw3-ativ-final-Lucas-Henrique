import { useState, useEffect } from 'react';
import axios from 'axios'
import SelectSala from '../components/form/SelectSala'
import Input from '../components/form/input';


export default function CadastroAluno() {
    const [itens, setItens] = useState([]);
    const [sala, setSala] = useState({});
    useEffect(() => {

        fetch('http://localhost:5000/Siglas',
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
            .then(
                (response) => response.json()
            ).then(
                (data) => {
                    setItens(data);
                    console.log(itens);
                    console.log(data)
                    
                }
            )
            .catch(
                (error) => {
                    console.log(`Não foi possivel fazer o fetch do conteudo: ${error}`)
                }
            )
    },
        []);

    

   

    function handleClass() {
        
    }

    function handleItens(event){
        event.preventDefault();
        setSala({...sala, [event.target.id] : event.target.value});
        console.log(sala);

    }

    function handleClassroom(event){
        setSala({...sala, category:{
            id: event.target.value,
            category: event.target.options[event.target.selectedIndex].text
        }});
    }

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:5000/Salas', sala)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div>
            <h1>
                Clique no botão para mostrar os itens no console:
            </h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <Input
                    type='text'
                    id="NomeTurma"
                    placeholder='Digite o nome da turma'
                    text='Espaço para digitar o nome da turma: '
                    handlerOnChange={handleItens}
                    />
                    <SelectSala
                        id='salas'
                        text='Selecione sua sala'
                        label='veja todas as salas disponiveis'
                        options={itens}
                        handlerOnChange={handleClassroom}
                        
                    />
                    <button type='submit'>Enviar</button>
                </form>
            </section>
        </div>
    );
}