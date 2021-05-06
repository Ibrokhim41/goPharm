import userCartIcon from '../../assets/bonus_card.58eebc9.svg'


const UserBonusCart = () => {

    return ( 
        <>
            <div className="fontS18 fontW500 mb-4 ml-10">Бонусная карта</div>
            <div className="relative">
                <img className="userCart object-cover" src={userCartIcon} alt="cart" />
                <div className="absolute top-11 ml-11">
                    <div className="fontS24 fontW700 text-white">2 270 сум</div>
                    <div className="text-white">Мой баланс</div>
                </div>
            </div>
        </>
    )
}

export default UserBonusCart;