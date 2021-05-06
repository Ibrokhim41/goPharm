import plus from '../../assets/plus.svg'
import uzcard from '../../assets/uzcard.svg'
import humo from '../../assets/humo.svg'
import editIcon from '../../assets/edit.svg'
import removeIcon from '../../assets/remove.svg'


const UserPaymentCart = () => {

    return (
        <>
            <div className="fontS18 fontW500 mb-4 flex justify-between">
                Платежные карты
                <img className="cursor-pointer" src={plus} alt="icon"/>
            </div>
            <div className="grid grid-cols-5 mt-5 text-cusGrey fontW500">  
                <div className="col-span-1">Карта</div>
                <div className="col-span-2">Номер карты</div>
                <div className="col-span-1">мм/гг</div>
                <div className="col-span-1">Действия</div>
            </div>
            {/* uzcard */}
            <div className="grid grid-cols-5 mt-5 text-cusGrey fontW500">
                <div className="col-span-1">
                    <img src={uzcard} alt=""/>
                </div>
                <div className="col-span-2">
                    8392 4839 2938 9102
                </div>
                <div className="col-span-1">12/24</div>
                <div className="flex">
                    <img className="cursor-pointer" src={editIcon} alt="icon"/>
                    <img className="ml-8 cursor-pointer" src={removeIcon} alt="icon" />
                </div>
            </div>
            {/* humo */}
            <div className="grid grid-cols-5 mt-5 text-cusGrey fontW500">
                <div className="col-span-1">
                    <img src={humo} alt="" />
                </div>
                <div className="col-span-2">
                    8392 4839 2938 9102
                </div>
                <div className="col-span-1">12/24</div>
                <div className="flex">
                    <img className="cursor-pointer" src={editIcon} alt="icon" />
                    <img className="ml-8 cursor-pointer" src={removeIcon} alt="icon" />
                </div>
            </div>
        </>
    )
}

export default UserPaymentCart;