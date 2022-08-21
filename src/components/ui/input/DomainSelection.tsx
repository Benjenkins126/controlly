interface DomainSelectionProps {
    label: string;
    id: string;
    name: string;
    value?: string;
    domain: string;
}

const DomainSelection = (props: DomainSelectionProps) => {
    return (
        <div className="pt-5">
            <label className="text-black/75 font-sans text-sm block font-medium">{props.label}</label>
            <input type="text" id={props.id} name={props.name} value={props.value} className="w-full h-9 rounded border border-black/15 mt-1.5 border-box px-2 font-sans" />
            <span className="text-xs border-box h-9 leading-9 px-3 rounded bg-black/10 float-right relative -mt-9">{props.domain}</span>
        </div>
    )
}

export default DomainSelection;