

export default function SelectSala({ id, options, text, label }) {

    return (
        <div>
            <p>{label}</p>
            <select id={id}>
                <option value="">{text}</option>
                {options.map((option) => (
                    <option value={option.id}>{option.Sala}</option>
                ))}
            </select>
        </div>
    )


}