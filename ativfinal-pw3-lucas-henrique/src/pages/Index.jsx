import { useState, useEffect } from 'react';
import axios from 'axios'
import SelectSala from '../components/form/SelectSala'
import Input from '../components/form/input';


export default function CadastroAluno() {

    useEffect(() => {
        handleItens();
    }, [])

    const [sala, setSala] = ({});
    const [itens, setItens] = useState([]);

    function handleItens() {
        axios.get('http://localhost:5000/Salas')
            .then((response) => {
                setItens(response.data);
                console.log(itens);
            })
            .catch((error) => {
                console.log("Sua aplicação deu erro amigão" + error);
            })

    }

    function handleItens(event){

        setSala({...sala, [event.target.id] : event.target.value});
        console.log(sala);

    }

    function handleCategory(event){
        setSala({...sala, category:{
            id : event.target.value,
            categoria : event.target.options[event.target.selectIndex].text
        }});
    }

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:5000/', sala)
        .then((response)=>{

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
                    placeholder='Digite o nome da turma'
                    text='Espaço para digitar o nome da turma: '
                    handlerOnChange=""
                    />
                    <SelectSala
                        id='Salas'
                        text='Selecione sua sala'
                        label='veja todas as salas disponiveis'
                        options={itens}
                    />
                    <button type='submit'>Enviar</button>
                </form>
            </section>
        </div>
    );
}