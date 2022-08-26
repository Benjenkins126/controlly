interface TextInputProps {
    label: string;
    type: string;
    id: string;
    name: string;
    placeholder?: string;
    value?: string;
    classes?: string;
}

const TextInput = (props: TextInputProps) => {
    return (
        <div className={"pt-5 " + props.classes}>
            <label className="text-black/75 font-sans text-sm block font-medium">{props.label}</label>
            <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} value={props.value} className="w-full h-9 rounded border border-black/15 mt-1.5 border-box px-2 font-sans" />
        </div>
    )
}

export default TextInput;