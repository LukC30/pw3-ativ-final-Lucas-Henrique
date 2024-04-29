import { useState,useEffect } from "react";
import style from './lista.module.css'
import { useLocation } from "react-router-dom";
import Message from '../components/form/message'
import axios from 'axios'
import CardSala from "../components/cardSala/CardSala";

export default function ListagemAlunos(){
    const location = useLocation()
    const [dados, setDados] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/Salas')
        .then((response)=>{
            return setDados(response.data)
        })
        .catch((error)=>{
            console.error(`Erro na listagem dos alunos: ${error}`)
        })


    },[])

    let message = ""
    if(location.state)message = location.state;
    

    return(
        <div className={style.index}>
            <h1 className={style.title}>Aqui as salas serão listadas</h1>
            {
                message&&<Message
                message={'Sala cadastrada com sucesso!'}
                type={'sucess'}
                />
            }
            <section>
                {
                    dados&&dados.map((sala, index)=>(
                        <CardSala
                        id={sala.id}
                        siglaSala={sala.category.category}
                        nomeSala={sala.NomeTurma}
                        idSigla={sala.category.id}

                        />
                    ))
                }
            </section>
        </div>
    );
}