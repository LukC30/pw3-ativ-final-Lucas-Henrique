import styles from './cardSala.module.css'

export default function CardSala({id, nomeSala, siglaSala, idSigla}){


    return(
        <div id={id} className={styles.divSala}>
            <h1>{nomeSala}</h1>
            <section></section><label id={idSigla}>{siglaSala}</label>
        </div>
    )
}