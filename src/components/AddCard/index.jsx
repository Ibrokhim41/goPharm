import DefaultButton from "../DefaultButton"
import DefaultInput from "../DefaultInput"
import closeIcon from "../../assets/x-icon.svg"

const AddCard = () => {

    return (
        <div className="w-screen h-screen fixed top-0 flex justify-center items-center bg-modalBg z-10">
            <div className="w-1/2 relative bg-white py-14 rounded-md text-center">
                <img className="absolute right-10 top-10 w-4 cursor-pointer" src={closeIcon} alt="icon"/>
                <div className="fontS20 fontW500">Добавить карту</div>
                <div className="w-1/2 mx-auto fontS16 text-cusGrey my-4">Введите данные карты для того, чтобы добавить ее в платежную систему</div>
                <div className="flex flex-col items-center">
                    <DefaultInput customClass="mb-3 px-4 bg-bgGray" placeholder="Номер карты" />
                    <DefaultInput customClass="mb-3 px-4 bg-bgGray" placeholder="Срок действия" />
                </div>
                <DefaultButton text="Добавить" customClass="w-80 bg-primary mt-4 px-4 py-2.5 text-white fontS16 fontW500 mx-auto"/>
            </div>
        </div>
    )
}

export default AddCard;