interface SetupSectionTitleProps {
    children?: React.ReactNode;
}

const SetupSectionTitle = (props: SetupSectionTitleProps) => {
    return (
        <h3 className="font-sans mt-6 font-bold text-purpleControlly text-base">{props.children}</h3>
    );
}

export default SetupSectionTitle;