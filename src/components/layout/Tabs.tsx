import { Link } from "react-router-dom";

interface TabsProps {
    tabs: Array<TabObject>;
}

interface TabObject {
    name: String;
    badge?: String;
    active: Boolean;
    link: string;
}

const Tabs = (props: TabsProps) => {
    return (
        <div className="mt-3">
            {props.tabs.map(tab => (
                <Link to={tab.link}>
                    <div className={`pageTab inline-block px-5 py-3.5 font-sans font-medium transition-all ease-in-out duration-300 border-b-4 ${tab.active ? 'text-black border-purpleControlly' : 'text-black/50 cursor-pointer border-transparent hover:border-black/10'}`}>
                        {tab.name}
                        {tab.badge ? <span className="text-xs text-white bg-purpleControlly rounded-full px-2 py-1 ml-1.5 relative -top-0.5">{tab.badge}</span> : ''}
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Tabs;