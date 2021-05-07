import Breadcrumbs from "../../components/Breadcrumbs"
import sort from '../../assets/playlist_cached_36.svg'
import chevronDown from '../../assets/icon.svg'
import xIcon from '../../assets/x-icon.svg'
import { useEffect, useState } from "react"
import ProductCart from '../../components/ProductCart/index';
import DefaultButton from "../../components/DefaultButton"

const Catalog = () => {

    const [showHide, setShowHide] = useState(false)

    return (
        <>
            <div className="container mx-auto py-8">
                <Breadcrumbs />
                <div className="flex justify-between mt-7">
                    <div className="fontS24 fontW500">Для женщин</div>
                    <div className="flex items-center">
                        <img className="w-6" src={sort} alt="sort" />
                        <div className="fontS16 ml-3.5">Сортировать по:</div>
                        <div className="fontS15 ml-6 cursor-pointer hover:text-primary">Названию</div>
                        <div className="fontS15 ml-6 cursor-pointer hover:text-primary">Цене</div>
                        <div className="fontS15 ml-6 cursor-pointer hover:text-primary">Наличии скидки</div>
                    </div>
                </div>
                {/*  */}
                <div className="grid grid-cols-4 pt-7">
                    {/* filter */}
                    <div className="col-span-1 mr-8">
                        <div className="fontS16">Цена (сум)</div>
                        <div className="grid grid-cols-2 gap-4 mt-5">
                            <input
                                placeholder="от"
                                className="col-span-1 bg-bgGray fontS15 text-cusGrey focus:outline-none px-2 py-1.5 border border-borderCol rounded-md appearance-none m-0" type="number" />
                            <input
                                placeholder="до"
                                className="col-span-1 bg-bgGray fontS15 text-cusGrey focus:outline-none px-2 py-1.5 border border-borderCol rounded-md appearance-none m-0" type="number" />
                        </div>
                        <div>
                            <div
                                onClick={() => setShowHide(!showHide)}
                                className="flex justify-between items-center mt-8 cursor-pointer">
                                <div className="fontS16">Форма выпуска</div>
                                <img className="w-3" src={chevronDown} alt="chevron" />
                            </div>
                            <div className={`${showHide ? 'h-full' : 'h-0'} overflow-hidden`}>
                                <div className="flex items-center mt-6">
                                    <input className="w-4 h-4" type="checkbox" />
                                    <div className="fontS15 ml-3">Полисорб</div>
                                </div>
                                <div className="flex items-center mt-6">
                                    <input className="w-4 h-4" type="checkbox" />
                                    <div className="fontS15 ml-3">Фармстандарт</div>
                                </div>
                            </div>
                            <DefaultButton text="Показать результаты" customClass="bg-lightBlue text-primary fontS16 fontW500 w-full mt-6" />
                            <button className="w-full flex justify-center items-center bg-lightBlue rounded-md focus:outline-none fontS16 fontW500 text-primary py-2.5 mt-6 hover:opacity-60">
                                <img className="mr-3" src={xIcon} alt="icon"></img>
                                Сбросить фильтр
                            </button>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-span-3">
                        <div className="grid grid-cols-3 gap-4">
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                        </div>
                        <div className="mt-14 flex justify-center">
                            <DefaultButton text="Загрузить больше" customClass="bg-lightBlue text-primary fontS16 fontW500 px-14" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog;