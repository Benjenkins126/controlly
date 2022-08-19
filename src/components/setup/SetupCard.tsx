interface SetupCardProps {
    title: string;
    children?: React.ReactNode;
}

const SetupCard = (props: SetupCardProps) => {
    return (
        <section className="mt-8 w-558 bg-white block mx-auto rounded-lg shadow-card">
            <section className="pt-10 px-12"> {/* Inner Card Padding */}
                <h2 className="font-sans font-extrabold text-2xl">{props.title}</h2>
            </section>
            {props.children}
        </section>
    );
}

export default SetupCard;