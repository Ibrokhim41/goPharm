import Breadcrumbs from "../../components/Breadcrumbs"
import sort from '../../assets/playlist_cached_36.svg'
import chevronDown from '../../assets/icon.svg'
import xIcon from '../../assets/x-icon.svg'
import { useEffect, useState } from "react"
import ProductCart from '../../components/ProductCart/index';
import DefaultButton from "../../components/DefaultButton"
import axios from "axios"
import { API_URL } from "../../redux/types"
import { useParams } from "react-router"

const Catalog = () => {

    const { catalog } = useParams();
    const [drugsByCategory, setDrugsByCategory] = useState([])
    const [nameFromTo, setNameFromTo] = useState(true)
    const [priceFromTo, setPriceFromTo] = useState(true)
    
    const [showHide, setShowHide] = useState(false)

    const fetchDrugs = async () => {
        await axios.get(`${API_URL}/drugs?page=1&category_slug=${catalog}&region=1&lan=ru`)
            .then(response => setDrugsByCategory(response.data.results))
    }
    useEffect(() => {
        fetchDrugs()
    }, [catalog])

    const sortPrice = () => {
        if (priceFromTo) {
            const sorted = drugsByCategory.sort((a,b) => {
                return parseFloat(a.price) - parseFloat(b.price)
            });
            setDrugsByCategory(sorted.slice())
        } else {
            const sorted = drugsByCategory.sort((a, b) => {
                return parseFloat(b.price) - parseFloat(a.price)
            });
            setDrugsByCategory(sorted.slice())
        }
        setPriceFromTo(!priceFromTo)
    }

    const sortName = () => {
        if(nameFromTo) {
            const sorted = drugsByCategory.sort((a, b) => {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
            setDrugsByCategory(sorted.slice())
        }
        else {
            const sorted = drugsByCategory.sort((a, b) => {
                if (b.name < a.name) { return -1; }
                if (b.name > a.name) { return 1; }
                return 0;
            })
            setDrugsByCategory(sorted.slice())
        }
        setNameFromTo(!nameFromTo)
    }


    return (
        <>
            <div className="container mx-auto py-8">
                <Breadcrumbs />
                <div className="flex justify-between mt-7">
                    <div className="fontS24 fontW500">{drugsByCategory.length ? drugsByCategory[0].category.name : null}</div>
                    <div className="flex items-center">
                        <img className="w-6" src={sort} alt="sort" />
                        <div className="fontS16 ml-3.5">Сортировать по:</div>
                        <div 
                            onClick={sortName}
                            className="fontS15 ml-6 cursor-pointer hover:text-primary">Названию</div>
                        <div 
                            onClick={sortPrice}
                            className="fontS15 ml-6 cursor-pointer hover:text-primary">Цене</div>
                        {/* <div className="fontS15 ml-6 cursor-pointer hover:text-primary">Наличии скидки</div> */}
                    </div>
                </div>
                {/*  */}
                <div className="grid grid-cols-4 pt-7 relative">
                    {/* filter */}
                    <div className="col-span-1 mr-8 sticky top-24">
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
                            {drugsByCategory.length ? drugsByCategory.map(item => (
                                <ProductCart name={item.name} image={item.image} slug={item.slug} price={item.price} key={item.id} />
                            )) : 
                                <div>No Items</div>}
                        </div>
                        <div className="mt-14 flex justify-center">
                            <DefaultButton
                                onClick={() => { }}
                                text="Загрузить больше"
                                customClass="bg-lightBlue text-primary fontS16 fontW500 px-14" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog;