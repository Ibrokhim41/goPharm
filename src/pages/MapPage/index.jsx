import Breadcrumbs from '../../components/Breadcrumbs/index';
import likeIcon from '../../assets/like.svg'

const MapPage = () => {

    return(
        <div className="container mx-auto py-12">
            <Breadcrumbs />
            <div className="grid grid-cols-3 gap-8 py-8 h-96">
                <div className="col-span-2 bg-cusGrey">

                </div>
                <div className="col-span-1 overflow-y-scroll">
                    <div className="border-2 border-borderCol rounded-md px-4 py-5 mb-4">
                        <div className="flex justify-between">
                            <div className="fontS15 fontW700">GrandPharm Mega Planet</div>
                            <div className="fontS12 text-cusGrey">12.3 км</div>
                        </div>
                        <div className="fontS13 mt-1 mb-5">АЛМАЗАРСКИЙ РАЙОН, УЛ.ЗИЁ, ДОМ 12</div>
                        <div className="flex justify-between">
                            <div className="flex">
                                <div>
                                    <div className="fontS16">08:00 - 22:00</div>
                                    <div className="fontS12 text-cusGrey">Режим работы</div>
                                </div>
                                <div className="ml-6">
                                    <div className="fontS16">+998 99 004 84 82</div>
                                    <div className="fontS12 text-cusGrey">Телефон</div>
                                </div>
                            </div>
                            <img src={likeIcon} alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapPage;