type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: string;
    onClick?: () => void;
}

const Button = ({ type, title, variant, onClick} : ButtonProps) => {
    return(
        <button
            className={`whitespace-nowrap border text-sm font-medium rounded-md ${variant} `}
            type={type}
            onClick={onClick}
        >
            <label className="font-semibold cursor-pointer">{title}</label>
        </button>
    )
}

export default  Button;