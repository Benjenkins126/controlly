interface SelectProps {
    label: string;
    id: string;
    name: string;
    value?: string;
    options: Array<SelectOptions>;
}

interface SelectOptions {
    value: string,
    text: string,
}

const Select = (props: SelectProps) => {
    return (
        <div className="pt-5">
            <label className="text-black/75 font-sans text-sm block font-medium">{props.label}</label>
            <select id={props.id} name={props.name} value={props.value} className="w-full h-9 rounded border border-black/15 mt-1.5 border-box px-2 font-sans">
                {props.options.map(option => (
                    <option value={option.value}>{option.text}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;