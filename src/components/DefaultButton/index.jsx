

const DefaultButton = ({ text = 'default text', customClass, icon, iconClass, func = null}) => {

    return (
        <>
            <button
                disabled = {func === null ? true : false}
                onClick={() => func()} 
                className={`${customClass} flex justify-center py-2.5 rounded-md focus:outline-none hover:opacity-60 text-center`}>
                {icon && <img className={`${iconClass}`} src={icon} alt="icon" />}
                {text}
            </button>
        </>
    )
}

export default DefaultButton;