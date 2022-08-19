interface CardFooterProps {
    children?: React.ReactNode;
}

const CardFooter = (props: CardFooterProps) => {
    return (
        <footer className="py-5 px-12">
            {props.children}
        </footer>
    );
}

export default CardFooter;