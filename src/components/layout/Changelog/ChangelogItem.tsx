interface ChangelogItemProps {
    id: String;
    version: String;
    releaseDate: String;
    active: Boolean;
}

const ChangelogItem = (props: ChangelogItemProps) => {
    return (
        <div className={`px-4 py-3 rounded-lg mb-2 ${props.active ? 'bg-white/10' : 'bg-transparent cursor-pointer'}`}>
            <h3 className="text-white font-sans font-bold text-lg leading-0 mb-0 pb-0">Version {props.version}</h3>
            <h6 className="text-white/50 font-sans text-sm relative -mt-0.5">{props.releaseDate}</h6>
        </div>
    );
}

export default ChangelogItem;