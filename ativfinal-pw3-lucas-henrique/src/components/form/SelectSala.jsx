import styles from './select.module.css'

export default function SelectSala({ id, options, text, label, handlerOnChange }) {

    return (
        <div className={styles.selectors}>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={id} onChange={handlerOnChange}>
                <option value="">{text}</option>
                {
                    options.map((option) => (
                        <option value={option.id} key={option.id}>
                            {option.Sala}
                        </option>
                ))}

            </select>
        </div>
    )


}