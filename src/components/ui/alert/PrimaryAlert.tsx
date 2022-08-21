interface PrimaryAlertProps {
    children: React.ReactNode;
}

const PrimaryAlert = (props: PrimaryAlertProps) => {
    return (
        <div className="bg-primaryAlert rounded-lg mt-6 leading-6 px-3 py-2 text-sm text-medium">
            {props.children}
        </div>
    );
}

export default PrimaryAlert;