

const DefaultInput = ({ placeholder, customClass, val, onChange, onBlur, onFocus }) => {

    onChange = onChange ? onChange : () => { };
    onBlur = onBlur ? onBlur : () => { };
    onFocus = onFocus ? onFocus : () => { };

    return (
        <>
            <input
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                value={val}
                className={`${customClass} py-2.5 border-2 border-borderCol rounded-md bg-bgGrey focus:outline-none fontS15 text-cusGrey w-80`} placeholder={placeholder} type="tel" />
        </>
    )
}

export default DefaultInput;