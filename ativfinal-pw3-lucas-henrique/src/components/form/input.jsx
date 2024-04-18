import styles from './input.css'


export default function Input({text, id, value, handlerOnChange, type, placeholder}){

    return(

        <div>
            <p>{text}</p>
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