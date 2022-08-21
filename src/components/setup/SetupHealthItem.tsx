import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

interface SetupHealthItemProps {
    criteria: boolean;
    info?: string;
    children?: React.ReactNode;
}

const SetupHealthItem = (props: SetupHealthItemProps) => {
    return (
        <div>
            <span className={`text-lg ${props.criteria ? 'text-greenSuccess' : 'text-redError'}`}>
                <FontAwesomeIcon icon={props.criteria ? faCheck : faXmark} />
            </span>
            <span className='ml-2 text-sm font-sans text-black/75 text-semibold relative -top-0.5'>
                {props.children}
            </span>
            <a href={props.info} className="ml-2 text-lg text-purpleControlly">
                <FontAwesomeIcon icon={faInfoCircle} />
            </a>
        </div>
    );
}

export default SetupHealthItem;