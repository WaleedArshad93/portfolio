
export const Button = ({ onClick, name, active, ...props }) => {


    return (
        <button 
            id={name} name={name} onClick={onClick} 
            className={`${active ? " bg-white text-black " : " hover:bg-white hover:text-black "} rounded-full mx-5 p-2 ${props.className}`}>
            {props.children}
        </button>
    )
}