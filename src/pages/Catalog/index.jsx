import Breadcrumbs from "../../components/Breadcrumbs"
import sort from '../../assets/playlist_cached_36.svg'
import chevronDown from '../../assets/icon.svg'
import xIcon from '../../assets/x-icon.svg'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useEffect, useState } from "react"
import ProductCart from '../../components/ProductCart/index';
import DefaultButton from "../../components/DefaultButton"
import axios from "axios"
import { API_URL } from "../../redux/types"
import { useParams } from "react-router"

const Catalog = () => {
    const { catalog } = useParams();

    // Fetching data
    const [drugsByCategory, setDrugsByCategory] = useState([])
    const [drugs, setDrugs] = useState([])
    const [internationalNames, setInternationalNames] = useState([])
    const [page, setPage] = useState(2)
    const [nextIN, setNextIN] = useState(1)
    const [units, setUnits] = useState([])
    const [unitNext, setUnitNext] = useState('')
    const [manufacturer, setManufacturer] = useState([])
    const [nextManf, setNextManf] = useState('')

    const fetchDrugs = async () => {
        await axios.get(`${API_URL}/drugs?page=1&category_slug=${catalog}&region=1&lan=ru`)
            .then(response => {
                setDrugsByCategory(response.data.results)
                setDrugs(response.data.results)
            })
    }
    const fetchMoreDrugs = async () => {
        await axios.get(`${API_URL}/drugs?page=${page}&category_slug=${catalog}&region=1&lan=ru`)
            .then(response => setDrugsByCategory(drugsByCategory.concat(response.data.results)))
            .then(setDrugs(drugsByCategory))
        setPage(page + 1)
    }
    const fetchInternationalNames = async () => {
        await axios.get(`${API_URL}/international-names?per_page=8&page=${nextIN}&category_id=${drugsByCategory[0].category.id}&region=1&lan=ru`)
            .then(response => setInternationalNames(internationalNames.concat(response.data.results)))
        setNextIN(nextIN + 1)
    }
    const fetchUnit = async () => {
        unitNext !== 'stop' &&
            await axios.get(unitNext ? unitNext : `${API_URL}/units?per_page=8&page=1&category_id=${drugsByCategory[0].category.id}&region=1&lan=ru`)
                .then(response => {
                    setUnits(units.concat(response.data.results))
                    response.data.next ? setUnitNext(response.data.next) : setUnitNext('stop')
                })
    }
    const fetchManufacturer = async () => {
        nextManf !== 'stop' &&
            await axios.get(nextManf ? nextManf : `${API_URL}/manufacturers?per_page=8&page=1&category_id=${drugsByCategory[0].category.id}&region=1&lan=ru`)
                .then(response => {
                    setManufacturer(manufacturer.concat(response.data.results))
                    response.data.next ? setNextManf(response.data.next) : setNextManf('stop')
                })
    }



    useEffect(() => {
        fetchDrugs()
    }, [catalog])


    // Sort
    const [nameShow, setNameShow] = useState(false)
    const [priceShow, setPriceShow] = useState(false)

    const sortPrice = () => {
        if (priceFromTo) {
            const sorted = drugsByCategory.sort((a, b) => {
                return parseFloat(a.price) - parseFloat(b.price)
            }).slice();
            setDrugsByCategory(sorted)
        } else {
            const sorted = drugsByCategory.sort((a, b) => {
                return parseFloat(b.price) - parseFloat(a.price)
            }).slice();
            setDrugsByCategory(sorted)
        }
        setPriceFromTo(!priceFromTo)
        setPriceShow(true)
    }

    const sortName = () => {
        if (nameFromTo) {
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
        setNameShow(true)
    }

    // Filter
    const [minPrice, setMinPrice] = useState(null)
    const [maxPrice, setMaxPrice] = useState(null)
    const [nameFromTo, setNameFromTo] = useState(true)
    const [priceFromTo, setPriceFromTo] = useState(true)
    const [showHide, setShowHide] = useState(false)
    const [unitShow, setUnitShow] = useState(false)
    const [manufacturerShow, setMaufacturerShow] = useState(false)
    const [selectedIN, setSelectedIN] = useState([])
    const [selectedMF, setSelectedMF] = useState([])
    const [selectedUnit, setSelectedUnit] = useState([])
    const [clearInputs, setClearInputs] = useState(false)

    const filterPrice = () => {
        const sorted = drugsByCategory.filter(item => minPrice < item.price && item.price < maxPrice)
        minPrice !== null && maxPrice !== 0 && setDrugsByCategory(sorted.slice())
    }
    const filterIN = () => {
        const sorted = drugsByCategory.filter(item => selectedIN.includes(item.international_name.name))
        setDrugsByCategory(sorted.slice())
    }
    const INArr = (e, name) => {
        e.target.checked ?
            setSelectedIN(selectedIN.concat([name]))
            :
            setSelectedIN(selectedIN.filter(item => item !== name).slice())
    }
    const filterManF = () => {
        const sorted = drugsByCategory.filter(item => selectedMF.includes(item.manufacturer.name))
        selectedMF.length && setDrugsByCategory(sorted.slice())
    }
    const MFArr = (e, name) => {
        e.target.checked ?
            setSelectedMF(selectedMF.concat([name]))
            :
            setSelectedMF(selectedMF.filter(item => item !== name).slice())
    }
    const filterUnit = () => {
        const sorted = drugsByCategory.filter(item => selectedUnit.includes(item.unit.name))
        selectedUnit.length && setDrugsByCategory(sorted.slice())
    }
    const unitArr = (e, name) => {
        e.target.checked ?
            setSelectedUnit(selectedUnit.concat([name]))
            :
            setSelectedUnit(selectedUnit.filter(item => item !== name).slice())
    }

    const INToggle = () => {
        !internationalNames.length && fetchInternationalNames()
        setShowHide(!showHide)
    }
    const unitToggle = () => {
        !units.length && fetchUnit()
        setUnitShow(!unitShow)
    }
    const manufacturerToggle = () => {
        !manufacturer.length && fetchManufacturer()
        setMaufacturerShow(!manufacturerShow)
    }
    const filterAll = () => {
        setDrugsByCategory(drugs)
        filterPrice()
        filterIN()
        filterManF()
        filterUnit()
    }
    const clearFilter = () => {
        setDrugsByCategory(drugs)
        setClearInputs(true)
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
                        <div className="ml-6 flex items-center">
                            <AiOutlineArrowDown className={`${!nameShow && 'hidden'} fontS16 text-primary transition transform ${nameFromTo ? 'rotate-0' : 'rotate-180'}`} />
                            <div
                                onClick={sortName}
                                className="fontS15 cursor-pointer hover:text-primary">Названию</div>
                        </div>
                        <div className="ml-6 flex items-center">
                            <AiOutlineArrowDown className={`${!priceShow && 'hidden'} fontS16 text-primary transition transform ${priceFromTo ? 'rotate-0' : 'rotate-180'}`} />
                            <div
                                onClick={sortPrice}
                                className="fontS15 cursor-pointer hover:text-primary">Цене</div>
                        </div>
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
                                onChange={(e) => {
                                    setMinPrice(e.target.value)
                                }}
                                value={minPrice}
                                type="number"
                                placeholder="от"
                                className="col-span-1 bg-bgGray fontS15 text-cusGrey focus:outline-none px-2 py-1.5 border border-borderCol rounded-md appearance-none m-0" type="number" />
                            <input
                                onChange={(e) => setMaxPrice(e.target.value)}
                                value={maxPrice}
                                type="number"
                                placeholder="до"
                                className="col-span-1 bg-bgGray fontS15 text-cusGrey focus:outline-none px-2 py-1.5 border border-borderCol rounded-md appearance-none m-0" type="number" />
                        </div>
                        <div>
                            <div
                                onClick={INToggle}
                                className="flex justify-between items-center mt-8 cursor-pointer">
                                <div className="fontS16 fontW700">Международные названия</div>
                                <img className="w-3" src={chevronDown} alt="chevron" />
                            </div>
                            <div className={`${showHide ? 'h-96' : 'h-0'} overflow-y-scroll bg-scroll`}>
                                {internationalNames.length ? internationalNames.map((name) => (
                                    <div className="flex items-center mt-6">
                                        <input
                                            onChange={(e) => {
                                                INArr(e, name.name)
                                            }}
                                            id={name.id}
                                            className="min-w-4 h-4 cursor-pointer"
                                            type="checkbox" />
                                        <label for={name.id} className="fontS15 ml-3 cursor-pointer overflow-hidden text-overflow whitespace-nowrap">{name.name}</label>
                                    </div>
                                )) : null}
                                <div
                                    onClick={fetchInternationalNames}
                                    className="mx-auto w-24 bg-lightRed text-center cursor-pointer">
                                    More</div>
                            </div>
                            {/*  */}
                            <div
                                onClick={manufacturerToggle}
                                className="flex justify-between items-center mt-8 cursor-pointer">
                                <div className="fontS16 fontW700">Производитель</div>
                                <img className="w-3" src={chevronDown} alt="chevron" />
                            </div>
                            <div className={`${manufacturerShow ? 'h-full' : 'h-0'} overflow-hidden`}>
                                {manufacturer.length ? manufacturer.map((name) => (
                                    <div className="flex items-center mt-6">
                                        <input 
                                            onChange={(e) => MFArr(e, name.name)}
                                            id={name.id} className="min-w-4 h-4 cursor-pointer" type="checkbox" />
                                        <label for={name.id} className="fontS15 ml-3 cursor-pointer">{name.name}</label>
                                    </div>
                                )) : null}
                                <div
                                    onClick={fetchManufacturer}
                                    className="mx-auto w-24 bg-lightRed text-center cursor-pointer">
                                    More</div>
                            </div>
                            {/*  */}
                            <div
                                onClick={unitToggle}
                                className="flex justify-between items-center mt-8 cursor-pointer">
                                <div className="fontS16 fontW700">Форма выпуска</div>
                                <img className="w-3" src={chevronDown} alt="chevron" />
                            </div>
                            <div className={`${unitShow ? 'h-full' : 'h-0'} overflow-hidden`}>
                                {units.length ? units.map((name) => (
                                    <div className="flex items-center mt-6">
                                        <input 
                                            onChange={e => unitArr(e, name.name)}
                                            id={name.id} className="min-w-4 h-4 cursor-pointer" type="checkbox" />
                                        <label for={name.id} className="fontS15 ml-3 cursor-pointer">{name.name}</label>
                                    </div>
                                )) : null}
                            </div>
                            <DefaultButton
                                onClick={filterAll}
                                text="Показать результаты"
                                customClass="bg-lightBlue text-primary fontS16 fontW500 w-full mt-6" />
                            <button
                                onClick={clearFilter}
                                className="w-full flex justify-center items-center bg-lightBlue rounded-md focus:outline-none fontS16 fontW500 text-primary py-2.5 mt-6 hover:opacity-60">
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
                                onClick={fetchMoreDrugs}
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