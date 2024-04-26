import styles from './input.module.css'


export default function Input({text, id, value, handlerOnChange, type, placeholder}){

    return(

        <div className={styles.form_control}>
            <label>{text}</label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                placeholder={placeholder}
                onChange={handlerOnChange}
            />
        </div>
    )
}