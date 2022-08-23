interface BreadcrumbsProps {
    past?: Array<string>;
    active: string;
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
    return (
        <nav>
            {props.past?.map(item => (
                <span className="text-sm font-medium text-black/50 font-sans">{item}<span className="px-2.5">/</span></span>
            ))}
            <span className="text-sm font-medium text-black font-sans">{props.active}</span>
        </nav>
    );
}

export default Breadcrumbs;