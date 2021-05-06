import avatar from '../../assets/user.png'
import Breadcrumbs from '../../components/Breadcrumbs/index';
import userIcon from '../../assets/user-icon.svg'
import giftIcon from '../../assets/gift_icon.svg'
import paymentIcon from '../../assets/payment_card_outline_28.svg'
import marketIcon from '../../assets/market_outline_28 @ shopping bag.svg'
import exitIcon from '../../assets/sign-out-alt 1.svg'
import UserOrders from '../../components/UserOrders';
import UserPaymentCart from '../../components/UserPaymentCart';
import UserInfo from '../../components/UserInfo';
import UserBonusCart from '../../components/UserBonusCart';

const User = () => {

    return (
        <>
            <div className="container mx-auto py-12">
                <Breadcrumbs />
                <div className="grid grid-cols-3 mt-8">
                    <div className="col-span-1 border-r border-borderCol">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <img className="w-16 h-16 object-cover rounded-full" src={avatar} alt="avatar" />
                                <div className="fontS16 fontW500 ml-4 text-cusGrey">
                                    <div className="">user Name</div>
                                    <div>09.10.1995</div>
                                </div>
                            </div>
                            <div className="flex items-center mt-8">
                                 <img src={userIcon} alt="icon"/>
                                <div className="ml-4 fontS18 fontW500 text-cusGrey cursor-pointer hover:text-primary">Мой профиль</div>
                            </div>
                            <div className="flex items-center mt-8">
                                <img src={giftIcon} alt="icon" />
                                <div className="ml-4 fontS18 fontW500 text-cusGrey cursor-pointer hover:text-primary">Бонусная карта</div>
                            </div>
                            <div className="flex items-center mt-8">
                                <img src={paymentIcon} alt="icon" />
                                <div className="ml-4 fontS18 fontW500 text-cusGrey cursor-pointer hover:text-primary">Платежные карты</div>
                            </div>
                            <div className="flex items-center mt-8">
                                <img src={marketIcon} alt="icon" />
                                <div className="ml-4 fontS18 fontW500 text-cusGrey cursor-pointer hover:text-primary">История заказов</div>
                            </div>
                            <div className="flex items-center mt-8">
                                <img src={exitIcon} alt="icon" />
                                <div className="ml-4 fontS18 fontW500 text-cusGrey cursor-pointer hover:text-primary">Выход</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 ml-8">
                        <UserInfo />
                        <UserBonusCart />
                        <UserPaymentCart />
                        <UserOrders />
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;