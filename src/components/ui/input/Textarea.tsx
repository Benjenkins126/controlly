interface TextareaInputProps {
    label: string;
    id: string;
    name: string;
    value?: string;
    classes?: string;
}

const TextareaInput = (props: TextareaInputProps) => {
    return (
        <div className={"pt-5 " + props.classes}>
            <label className="text-black/75 font-sans text-sm block font-medium">{props.label}</label>
            <textarea id={props.id} name={props.name} className="w-full rounded border border-black/15 mt-1.5 border-box px-2 font-sans h-32 resize-none">{props.value}</textarea>
        </div>
    );
}

export default TextareaInput;