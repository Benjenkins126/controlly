interface SidebarCategoryName {
    children: React.ReactNode;
}

const SidebarCategory = (props: SidebarCategoryName) => {
    return (
        <h5 className="text-white uppercase font-sans font-bold text-sm px-8 pt-8 pb-2">{props.children}</h5>
    );
}

export default SidebarCategory;