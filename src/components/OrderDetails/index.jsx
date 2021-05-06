import checkIcon from "../../assets/check_circle.svg"
import DefaultInput from "../../components/DefaultInput"
import circle from '../../assets/blueCircle.svg'
import grayCircle from '../../assets/grayCircle.svg'
import outlineCircle from '../../assets/blueOutlineCircle.svg'
import DefaultButton from '../DefaultButton/index';


const OrderDetails = () => {

    return (
        <>
            <div className="fontS20 fontW500 my-6">Детали заказа</div>
            <div className="grid grid-cols-3">
                {/* left */}
                <div className="col-span-2 pr-8">
                    <div className="shadow-md rounded-md p-6 mb-8">
                        <div className="fontS18 fontW500">Статус заказа</div>
                        <div className="grid grid-cols-4">
                            <div className="relative col-span-1 flex items-center">
                                <img src={circle} alt="icon" />
                                <div className="w-full border-t-2 border-primary"></div>
                            </div>
                            <div className="relative col-span-1 flex items-center">
                                <img src={outlineCircle} alt="icon" />
                                <div className="circle w-full border-t-2 border-cusGrey2"></div>
                            </div>
                            <div className="relative col-span-1 flex items-center">
                                <img src={grayCircle} alt="icon" />
                                <div className="w-full border-t-2 border-cusGrey2"></div>
                            </div>
                            <div className="relative col-span-1 flex items-center">
                                <img src={grayCircle} alt="icon" />
                                <div className="w-full border-t-2 border-cusGrey2"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 mt-4">
                            <div className="col-span-1 fontS16">Заказ в ожидании</div>
                            <div className="col-span-1 fontS16">Заказ принят</div>
                            <div className="col-span-1 fontS16">Заказ в пути</div>
                            <div className="col-span-1 fontS16">Заказ доставлен</div>
                        </div>
                        <DefaultButton text="Отменить заказ" customClass="bg-lightRed px-20 text-white fontS16 fontW500 mt-8" />
                    </div>
                    {/*  */}
                    <div className="fontS18 fontW500">Состав заказа</div>
                    <div className="flex items-center mt-6">
                        <div className="relative mr-8">
                            <img
                                className="w-16 h-16"
                                src="https://cdn.dribbble.com/users/1251959/screenshots/6708918/pills-bottle-mock-up-psd-free-download_4x.jpg" alt="img"
                            />
                            <div className="absolute top-0 right-0 bg-cusGrey px-1 rounded-3xl text-white">x2</div>
                        </div>
                        <div>
                            <div className="fontS12 text-cusGrey">Витамины и БАДы</div>
                            <div className="fontS14">АЙФЛОКС cтерильно глазные капли 0,3% 5 мл</div>
                        </div>
                    </div>
                    <div className="flex items-center mt-6">
                        <div className="relative mr-8">
                            <img
                                className="w-16 h-16"
                                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/111510165/original/970467ad090fbdf3e7d7a5f101f9e163d75fc255/create-mockup-for-your-store-packaging-and-pills-bottle.jpg    " alt="img"
                            />
                            <div className="absolute top-0 right-0 bg-cusGrey px-1 rounded-3xl text-white">x2</div>
                        </div>
                        <div>
                            <div className="fontS12 text-cusGrey">Витамины и БАДы</div>
                            <div className="fontS14">АЙФЛОКС cтерильно глазные капли 0,3% 5 мл</div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="mt-8 mb-6 fontS18 fontW500">Персональные данные</div>
                    <div className="flex justify-between gap-4">
                        <DefaultInput customClass="w-full px-2.5 border-borderCol bg-bgGray" placeholder="Имя" />
                        <DefaultInput customClass="w-full px-2.5 border-borderCol bg-bgGray" placeholder="Номер телефона" />
                    </div>
                </div>

                {/* right */}
                <div className="col-span-1 p-5 shadow-md fontS14 h-min sticky top-24">
                    <div className="flex justify-between items-center">
                        <div className="fontS18 fontW700 mb-3">О заказе</div>
                        <div className="flex items-center">
                            <img className="mr-1 w-4" src={checkIcon} alt="icon" />
                            Оплачен
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mt-4">
                            <div>Способ получения</div>
                            <div className="text-cusGrey">Самовызов</div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div>Аптека</div>
                            <div className="text-cusGrey">GrandPharm Mega Planet</div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div>Способ оплаты</div>
                            <div className="text-cusGrey">Наличные</div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex justify-between mt-4">
                            <div>Количество (шт.)</div>
                            <div>2</div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div>Товары на сумму</div>
                            <div className="fontS12">1 780 000 сум</div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div>Промокод</div>
                            <div className="fontS12">- 20 000 сум</div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div>Всего к оплате:</div>
                        <div className="fontS16 fontW700">3 540 000 сум</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default OrderDetails;