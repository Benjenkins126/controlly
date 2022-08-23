import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface SidebarDropdownProps {
    icon: any;
    name: string;
    active: Boolean;
    links: Array<SidebarDropdownItemProps>;
}

interface SidebarDropdownItemProps {
    name: string;
    route: string;
}

const SidebarDropdown = (props: SidebarDropdownProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdown = () => {
        dropdownOpen === true ? setDropdownOpen(false) : setDropdownOpen(true);
    }

    return (
        <div className={`mx-4 px-4 py-3.5 cursor-pointer rounded-xl ${props.active ? 'bg-white/10' : 'bg-transparent'}`}>
            <div onClick={handleDropdown}>
                <img src={props.icon} alt={props.name} draggable="false" className={`w-5 inline-block mr-3 ${props.active ? 'opacity-100' : 'opacity-50'}`} />
                <span className={`font-sans font-medium relative top-0.5 ${props.active ? 'text-white' : 'text-white/50'}`}>
                    {props.name}
                    <FontAwesomeIcon icon={dropdownOpen ? faAngleDown : faAngleRight} className="ml-5" />
                </span>
            </div>
            <ul className={`list-disc pl-10 pt-2 overflow-hidden transition-opacity ease-out duration-1000 ${dropdownOpen ? 'h-auto opacity-100' : 'opacity-0 h-0'}`}>
                {props.links.map(link => (
                    <li className="text-white/50 font-medium font-sans mt-2">
                        <Link to={link.route}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SidebarDropdown;