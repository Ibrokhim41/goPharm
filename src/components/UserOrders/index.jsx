

const UserOrders = () => {

    return (
        <>
            <div className="fontS18 fontW500 mb-4">История заказов</div>
            <div className="H540 overflow-y-scroll">
                <div className="bg-lightBlue p-4 rounded-md mb-4">
                    <div className="border-b border-borderCol">
                        <div className="fontS16 fontW700">№00029323</div>
                        <div className="fontS12 text-cusGrey">2 июня</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="fontS16 fontW500 py-4">Доставка курьером</div>
                        <div className="bg-cusGrey rounded-md py-1 px-3 text-white">Доставлен</div>
                    </div>
                    <div className="fontS12">Дата доставки: 2 июня 12:04</div>
                    <div className="fontS12 text-cusGrey">К оплате 62 000 сум</div>
                    <div className="flex gap-4 mt-4">
                        <img className="w-14 h-14 object-contain" src="https://www.farmacia-guerrero.com/image/cache/catalog/productes/3100067-500x500.jpg" alt="img" />
                        <img className="w-14 h-14 object-contain" src="https://glassbottles.co.uk/wp-content/uploads/2017/07/500ml-Amber-Glass-Sirop-Bottle-w-Label.jpg" alt="img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserOrders;