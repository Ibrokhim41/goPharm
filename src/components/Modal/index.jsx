import closeIcon from "../../assets/x-icon.svg"
import useOnclickOutside from 'react-cool-onclickoutside'

const Modal = ({ body, show, showFunc }) => {

    let ref = useOnclickOutside(() => {
        showFunc(false)
    })

    return (
        <>
            {show &&
                <div className="w-screen h-screen fixed top-0 flex justify-center items-center bg-modalBg z-10">
                    <div className="w-1/2 relative bg-white py-14 rounded-md text-center" ref={ref}>
                        <img
                            onClick={() => showFunc(false)}
                            className="absolute right-10 top-10 w-4 cursor-pointer" src={closeIcon} alt="icon"
                        />
                        {body}
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;