import styles from './cardSala.module.css'

import { Link } from 'react-router-dom'
export default function CardSala({id, nomeSala, siglaSala, idSigla, handleDelete}){

    function handlerSubmit(event){
        event.preventDefault();
        handleDelete(id);
    }

    return(
        <div id={id} className={styles.divSala}>
            <div ><h1>{nomeSala} </h1></div>
            <label id={idSigla}>{siglaSala}</label><br/>
            <div className={styles.divdiv}>
                <Link to={`/EditarTurma/${id}`}>
                    Editar sala
                </Link>
                <label onClick={handlerSubmit}>X</label>
            </div>
        </div>
    )
}