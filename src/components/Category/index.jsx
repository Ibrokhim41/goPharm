import arrowIcon from '../../assets/arrow_right.svg'
import fireIcon from '../../assets/fire_icon.svg'
import pillIcon from '../../assets/pill.svg'
import fitoIcon from '../../assets/beauty.svg'
import weddingIcon from '../../assets/wedding.svg'
import babyIcon from '../../assets/baby.svg'
import medIcon from '../../assets/med.svg'
import medItemIcon from '../../assets/medItem.svg'
import soapIcon from '../../assets/soap.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnclickOutside from "react-cool-onclickoutside";


const Category = ({showCatalog = null}) => {

    const titles = [
        {
            title: "Самое актуальное",
            icon: fireIcon,
            subTitle: [
                'Моновитамины',
                "Мультивитамины",
                "Для беременных и кормящих",
            ]
        },
        {
            title: "Лекарственные препараты",
            icon: pillIcon,
            subTitle: [
                'Моновитамины',
                "Мультиви546тамины",
                "Для беременных и кормящих",
            ]
        },
        {
            title: "Фитопрепараты",
            icon: fitoIcon,
            subTitle: [
                'Моновитамины',
                "Мультивитамины",
                "Для беремkljl;енных и кормящих"
            ]
        },
        {
            title: "Планирование семьи",
            icon: weddingIcon,
            subTitle: [
                'Моновитамины',
                "Мультивитамины",
                "Для берzxcvzxcеменных и кормящих"
            ]
        },
        {
            title: "Мама и малыш",
            icon: babyIcon,
            subTitle: [
                'Моновитамины',
                "Мульadfadfadfтивитамины",
                "Для беременных и кормящих"
            ]
        },
        {
            title: "Медицинские изделия",
            icon: medIcon,
            subTitle: [
                'Моновитаминqerqerы',
                "Мультивитамины",
                "Для беременных и кормящих"
            ]
        },
        {
            title: "Приборы медицинские",
            icon: medItemIcon,
            subTitle: [
                'Моновитаминыewqrwerqq',
                "Мультивитамины",
                "Для беременных и кормящих",
                'Моновитаминыewqrwerqq',
                "Мультивитамины",
                "Для беременных и кормящих",
                'Моновитаминыewqrwerqq',
                "Мультивитамины",
                "Для беременных и кормящих",
                'Моновитаминыewqrwerqq',
                "Мультивитамины",
                "Для беременных и кормящих",
                'Моновитаминыewqrwerqq',
                "Мультивитамины",
                "Для беременных и кормящих",
            ]
        },
        {
            title: "Гигиена, красота и уход",
            icon: soapIcon,
            subTitle: [
                'Моновитамины1',
                "Мультивитамины2",
                "Для беременных и кормящих3",
            ]
        },
    ];

    const [showSubCatId, setShowSubCatId] = useState(0);
    const [showSubCat, setShowSubCat] = useState(false);
    

    const ref = useOnclickOutside(() => {
        setShowSubCat(false)
    })

    window.addEventListener('scroll', () => {
        setShowSubCat(false)
    })


    return (
        <>
            <div className="relative w-full shadow-md fontS16 bg-white">
                {titles.map((item, i) => (
                    <>
                        <div
                            onClick={() => {
                                setShowSubCatId(i)
                                setShowSubCat(true)
                            }}
                            key={i}
                            className="w-full flex items-center justify-between py-3 hover:bg-lightBlue cursor-pointer">
                            <div className="flex items-center px-4">
                                <img src={item.icon} alt="icon"></img>
                                <p className="ml-4">{item.title}</p>
                            </div>
                            <img className="pr-4" src={arrowIcon} alt="icon"></img>
                        </div>
                        <div 
                            ref={ref}
                            className={`absolute top-0 -right-full bg-white w-full h-full z-10 border-l-2 border-borderCol overflow-y-scroll ${showSubCat && showSubCatId === i ? '' : 'hidden'}`}>
                            {item.subTitle.map((title, i) => (
                                <Link to="/catalog">
                                    <div
                                        onClick={() => showCatalog && showCatalog(false)}
                                        className={`hover:bg-lightBlue cursor-pointer py-3`}>
                                        <p className="ml-4">{title}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}


export default Category;