import Dropdown from "../Dropdown";
import place from "../../assets/place.svg";
import globe from "../../assets/globe.svg";
import chevronDown from "../../assets/icon.svg";
import success from "../../assets/succes.png";
import Modal from "../Modal";
import { useState } from 'react';
import DefaultButton from "../DefaultButton";
import flagUz from '../../assets/uzb.png';
import flagRu from '../../assets/globe.svg'

const HeaderTop = () => {

    const items = [
        {
            lang: "O'zbek tili",
            flag: flagUz
        },
        {
            lang: "Русский",
            flag: flagRu
        }
    ]

    const [showModal, setShowModal] = useState(false)
    const [country, setCountry] = useState("Ташкент")

    const modal =
        <div className="text-center">
            <img className="mx-auto" src={success} alt="img" />
            <div className="fontS24 fontW500 my-4">Вам показаны товары с доставкой в {country}</div>
            <div className="relative w-80 mx-auto">
                <select 
                    onClick={(e) => setCountry(e.target.value)}
                    className="focus:outline-none fontS15 w-full px-4 py-2.5 bg-bgGray border border-borderCol rounded-md cursor-pointer" 
                    name="pharmacy" 
                    id="pharmacy"
                >
                    <option value="Ташкент">Ташкент</option>
                    <option value="Самарканд">Самарканд</option>
                    <option value="Бухара">Бухара</option>
                </select>
                <div className="absolute h-full top-0 right-0 mr-4 flex items-center">
                    <img className="w-3" src={chevronDown} alt="icon" />
                </div>
            </div>
            <DefaultButton text="Подтвердить регион" customClass="bg-primary mx-auto text-white fontS16 fontW500 w-80 mt-6" />
        </div>

    return (
        <>
            <Modal show={showModal} showFunc={setShowModal} body={modal} />
            <div className="bg-lightBlue border-b border-borderCol">
                <div className="container mx-auto">
                    <div className="flex justify-between py-3.5">
                        <div className="flex text-cusGrey">
                            <div className="mr-4">О компании</div>
                            <div className="mr-4">Карта аптек</div>
                            <div className="mr-4">Помощь</div>
                        </div>
                        <div className="flex">
                            <div onClick={() => setShowModal(true)}>
                                <Dropdown icon={place} text="Ваша локация" hidden={true} />
                            </div>
                            <Dropdown
                                cusClass="ml-12"
                                icon={globe}
                                text="Русский"
                                items = {items}
                            />
                        </div>
                    </div>
                    {/* Abduqodir */}
                </div>
            </div>
        </>
    );
};
export default HeaderTop;
