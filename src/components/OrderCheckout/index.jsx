import DefaultButton from "../../components/DefaultButton";
import chevronDown from "../../assets/icon.svg"
import locationIcon from '../../assets/place.svg'
import likeIcon from '../../assets/like.svg'
import DefaultInput from "../../components/DefaultInput";
import plusIcon from '../../assets/add_square_outline_24.svg'
import logo from '../../assets/logo-sm.svg'

const OrderCheckout = () => {

    return (
        <>
            <div className="fontS20 fontW500 my-6">Оформление заказа</div>
            <div className="grid grid-cols-3">
                {/* left */}
                <div className="col-span-2 pr-8">
                    <div className="flex justify-between">
                        <div className="fontS18 fontW500">Состав заказа</div>
                        <div className="fontS16 fontW500 cursor-pointer text-primary">Редактировать</div>
                    </div>
                    {/*  */}
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
                    <div className="mt-8 mb-6 fontS18 fontW500">Выберите способ получения</div>
                    <div className="flex gap-4">
                        <label for="SDelivery" className="p-4 border border-primary bg-lightBlue rounded-md cursor-pointer">
                            <div className="flex items-baseline">
                                <input id="SDelivery" type="radio" name="deliveryType" />
                                <div className="ml-4">
                                    <div className="fontS16">Самовызов</div>
                                    <div className="fontS14 text-cusGrey">Заберите свой заказ из ближайшей к Вам аптеки GoPharm</div>
                                </div>
                            </div>
                        </label>
                        <label for="CDelivery" className="p-4 border border-borderCol rounded-md cursor-pointer">
                            <div className="flex items-baseline">
                                <input id="CDelivery" type="radio" name="deliveryType" />
                                <div className="ml-4">
                                    <div className="fontS16">Доставка курьером</div>
                                    <div className="fontS14 text-cusGrey">Ваш заказ будет доставлен в удобное для Вас место и время</div>
                                </div>
                            </div>
                        </label>
                    </div>
                    {/*  */}
                    <div className="mt-8 mb-6 fontS18 fontW500">Выберите аптеку для самовызова</div>
                    <div className="mt-8 flex gap-4">
                        {/* in */}
                        <div className="w-full flex flex-col justify-between">
                            <div className="relative">
                                <select className="focus:outline-none w-full px-4 py-3 bg-bgGray border border-borderCol rounded-md cursor-pointer" name="pharmacy" id="pharmacy">
                                    <option value="">GrandPharm Mega Planet</option>
                                    <option value="">option2</option>
                                    <option value="">option3</option>
                                </select>
                                <div className="absolute h-full top-0 right-0 mr-4 flex items-center">
                                    <img className="w-3" src={chevronDown} alt="icon" />
                                </div>
                            </div>
                            <DefaultButton
                                text="Выбрать аптеку на карте"
                                customClass="text-primary w-full py-2.5 bg-lightBlue fontS16 fontW500"
                                icon={locationIcon}
                                iconClass="mr-4"
                            />
                        </div>
                        {/* in */}
                        <div className="w-full border border-borderCol rounded-md py-4 px-3">
                            <div className="flex justify-between">
                                <div>АЛМАЗАРСКИЙ РАЙОН, УЛ.ЗИЁ, ДОМ 12 ДОМ 12</div>
                                <div className="text-cusGrey">12.3 км</div>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <div className="w-full flex justify-between pr-14">
                                    <div>
                                        <div className="text-cusGrey fontS12">Режим работы</div>
                                        <div>08:00 - 22:00</div>
                                    </div>
                                    <div>
                                        <div className="text-cusGrey fontS12">Телефон</div>
                                        <div>+998 99 004 84 82</div>
                                    </div>
                                </div>
                                <img className="cursor-pointer" src={likeIcon} alt="icon" />
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-8 mb-6 fontS18 fontW500">Персональные данные</div>
                    <div className="flex justify-between gap-4">
                        <DefaultInput customClass="w-full px-2.5 border-borderCol bg-bgGray" placeholder="Имя" />
                        <DefaultInput customClass="w-full px-2.5 border-borderCol bg-bgGray" placeholder="Номер телефона" />
                    </div>
                    {/*  */}
                    <div className="mt-8 mb-6 fontS18 fontW500">Тип оплаты</div>
                    <div>
                        <div className="flex items-center mb-3">
                            <input id="cash" type="radio" name="payment" />
                            <label className="fontS15 ml-4" for="cash">Наличные</label>
                        </div>
                        <div className="flex items-center mb-3">
                            <input id="card" type="radio" name="payment" />
                            <label className="fontS15 ml-4" for="card">8600 •••• •••• 3285</label>
                        </div>
                        <DefaultButton
                            text="Добавить карту"
                            icon={plusIcon}
                            customClass="w-1/2 bg-lightBlue mt-4 fontS16 fontW500 text-primary"
                        />
                        {/* in */}
                        <div className="w-1/2 flex justify-between items-center mt-8">
                            <div className="flex items-center fontS16 fontW500">
                                <img className="w-7 mr-2" src={logo} alt="logo" />
                                Мой Баланс
                            </div>
                            <div className="flex items-center fontS16 fontW500">
                                <div>Доступно:</div>
                                <div className="text-cusGrey ml-2">2 400 сум</div>
                            </div>
                        </div>
                        <DefaultInput placeholder="Введите сумму" customClass="w-1/2 px-3 mt-4" />
                    </div>
                    {/*  */}
                    <div className="mt-8 mb-6 fontS18 fontW500">Комментарии к заказу</div>
                    <textarea className="w-full border border-borderCol bg-bgGray focus:outline-none resize-none rounded-md p-4" placeholder="Сообщение" name="" id="" cols="30" rows="7"></textarea>
                </div>

                {/* right */}
                <div className="col-span-1 p-5 shadow-md fontS14 h-min sticky top-24">
                    <div className="fontS18 fontW700 mb-3">Детали заказа</div>
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
                    <DefaultButton text="Оформить заказ" customClass="bg-primary w-full text-white fontS16 fontW500 mt-9" />
                </div>
            </div>
        </>
    )
}

export default OrderCheckout;