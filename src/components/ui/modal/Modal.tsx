interface ModalProps {
    children?: React.ReactNode;
    closeModal?: any;
    show: Boolean;
}

const Modal = (props: ModalProps) => {
    if(!props.show) return null;
    return (
        <div className="bg-black/20 w-full h-full absolute left-0 top-0 right-0 bottom-0 animate__animated animate__fadeIn">
            <div className="w-558 bg-white mx-auto mt-32 px-8 py-6 rounded-lg shadow-card transition-all ease-in-out duration-500 animate__animated animate__fadeInDown animate__faster">
                {props.children}
            </div>
        </div>
    );
}

export default Modal;