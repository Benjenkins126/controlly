import { Link } from "react-router-dom";

interface SidebarItemProps {
    icon: any;
    name: string;
    route: string;
    active: Boolean;
}

const SidebarItem = (props: SidebarItemProps) => {
    return (
        <Link to={props.route}>
            <div className={`mx-4 px-4 py-3.5 rounded-xl ${props.active ? 'bg-white/10' : 'bg-transparent'}`}>
                <img src={props.icon} alt={props.name} draggable="false" className={`w-5 inline-block mr-3 ${props.active ? 'opacity-100' : 'opacity-50'}`} />
                <span className={`font-sans font-medium relative top-0.5 ${props.active ? 'text-white' : 'text-white/50'}`}>{props.name}</span>
            </div>
        </Link>
    );
}

export default SidebarItem;