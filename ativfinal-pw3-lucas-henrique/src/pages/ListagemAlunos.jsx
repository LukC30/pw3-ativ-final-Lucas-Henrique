import { useState,useEffect } from "react";
import style from './lista.module.css'
import { useLocation } from "react-router-dom";
import Message from '../components/form/message'

export default function ListagemAlunos(){
    const location = useLocation()
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

        </div>
    );
}