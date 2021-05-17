import logo from "../../assets/logo-sm.svg";
import searchIcon from "../../assets/search_icon.svg";
import cartIcon from "../../assets/cart.svg";
import userIcon from "../../assets/user.svg";
import likeIcon from "../../assets/like.svg";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Category from "../Category";
import useOnclickOutside from "react-cool-onclickoutside";

const HeaderStiky = ({show, bgColor="white"}) =>   {

    const [authed, setAuthed] = useState(false);
    const [search, setSearch] = useState("");
    const [showCatalog, setShowCatalog] = useState(false);

    window.addEventListener("scroll", () => {
        setShowCatalog(false)
        setSearch("")
    })
    
    const ref = useOnclickOutside(() => {
        setShowCatalog(false);
    });

    return (
        <>
            <div className={`bg-${bgColor} shadow-lg fixed w-full top-0 z-20 custom ${!show && '-top-full'}`}>
                <div className="container mx-auto relative flex justify-between items-center py-5">
                    <div className="flex mr-7">
                        <Link to="/">
                            <img className="w-10 mr-7" src={logo} alt="icon"></img>
                        </Link>
                        <button
                            onClick={() => setShowCatalog(!showCatalog)}
                            className="flex items-center bg-primary px-6 gap-2 text-white fontW700 rounded-md focus:outline-none">
                            <div>&#9776;</div>
                            <div>Все категории</div>
                        </button>
                        {showCatalog &&
                            <div className="absolute top-full" ref={ref}>
                                <Category showCat={setShowCatalog} />
                            </div>}
                    </div>
                    {/* search */}
                    <div className="flex flex-grow rounded-md bg-white py-2.5 px-5 border border-primary">
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            placeholder="Поиск лекарств"
                            className="w-full focus:outline-none text-cusGrey"
                        ></input>
                        <img
                            onClick={() => setSearch("")}
                            className="cursor-pointer"
                            src={searchIcon}
                            alt="icon"></img>
                    </div>
                    {/* userNav */}
                    <div className="flex">
                        <Link className="flex items-center ml-12 cursor-pointer" to="/favarite">
                            <img src={likeIcon} alt="icon"></img>
                            <p className="pl-2">Избранное</p>
                        </Link>
                        <Link className="flex items-center ml-12 cursor-pointer" to="/cart">
                            <div className="relative">
                                <img src={cartIcon} alt="icon"></img>
                                <div className="absolute -top-2 -right-2 bg-lightRed flex justify-center items-center w-4 h-4 rounded-full text-white text-xs font-bold">
                                    3
                                </div>
                            </div>
                            <p className="pl-2">Корзина</p>
                        </Link>
                        <Link className="flex items-center ml-12 cursor-pointer" to={authed ? '/user' : '/auth'}>
                            <img src={userIcon} alt="icon"></img>
                            <p className="pl-2">Мой кабинет</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderStiky;