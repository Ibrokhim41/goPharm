

const DefaultInput = ({ placeholder, customClass, val, func }) => {

    return (
        <>
            <input
                onFocus={() => func('+998')}
                value={val}
                onChange={(e) => func(val = e.target.value)}
                className={`${customClass} py-2.5 border-2 border-borderCol rounded-md bg-bgGrey focus:outline-none fontS15 text-cusGrey w-80`} placeholder={placeholder} type="tel" />
        </>
    )
}

export default DefaultInput;