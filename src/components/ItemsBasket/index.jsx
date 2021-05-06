
import DefaultButton from '../DefaultButton';
import DefaultInput from '../DefaultInput/index';
import trashIcon from '../../assets/trash-icon.svg'

const ItemsBasket = () => {

    return (
        <div className="grid grid-cols-4 py-12 relative">
            <div className="col-span-3 pr-4">
                <div className="grid grid-cols-6 fontS14 text-cusGrey border-b border-borderCol">
                    <div className="col-span-2">Товар</div>
                    <div className="col-1">Стоимость</div>
                    <div className="col-1">Количество</div>
                    <div className="col-1">Общая сумма</div>
                    <div className="col-1"></div>
                </div>
                {/*  */}
                <div className="grid grid-cols-6 my-4 fontS14">
                    <div className="col-span-2 flex">
                        <img
                            className="w-16 h-16"
                            src="https://cdn.dribbble.com/users/1251959/screenshots/6708918/pills-bottle-mock-up-psd-free-download_4x.jpg" alt="img"
                        />
                        <div>
                            <div className="fontS12 text-cusGrey">Витамины и БАДы</div>
                            <div className="fontS14">АЙФЛОКС cтерильно глазные капли 0,3% 5 мл</div>
                        </div>
                    </div>
                    <div className="col-1 flex items-center text-center">890 000 сум</div>
                    <div className="col-1 flex items-center">
                        <div className="flex bg-lightBlue">
                            <DefaultButton text="-" customClass="w-6 h-6 bg-primary text-white flex items-center justify-center fontS18" />
                            <div className="mx-4 text-primary fontS15 fontW500">2 шт.</div>
                            <DefaultButton text="+" customClass="w-6 h-6 bg-primary text-white flex items-center justify-center fontS18" />
                        </div>
                    </div>
                    <div className="col-1 flex items-center text-center">1 780 000 сум</div>
                    <div className="col-1 flex justify-center items-center">
                        <img className="w-4 cursor-pointer" src={trashIcon} alt="icon"/>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="col-span-1 p-5 shadow-md fontS14 h-min sticky top-24">
                <div className="fontS18 fontW700 mb-3">Итого:</div>
                <DefaultInput placeholder="Введите промокод" customClass="px-4 w-full" />
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
                <div className="flex justify-between mt-4">
                    <div>Всего к оплате:</div>
                    <div className="fontS16 fontW700">3 540 000 сум</div>
                </div>
                <DefaultButton text="Перейти к оформлению" customClass="bg-primary w-full text-white fontS16 fontW500 mt-9" />
            </div>
        </div >
    )
}

export default ItemsBasket;
