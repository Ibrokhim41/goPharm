import likeIcon from '../../assets/like.svg'
import cartIcon from '../../assets/shopping_cart_16.svg'
import { Link } from 'react-router-dom';

const ProductCart = () => {

    return (
        <>
            <div className="w-full bg-white shadow-md rounded-md">
                <Link to="/product">
                    <div className="w-64 h-48">
                        <img className="w-full h-full object-contain" src="https://api.gopharm.uz/media/drugs-thumbnail/10fed12d-7fa3-44a4-983a-67fc015484c6.jpg" alt="" />
                    </div>
                    <div className="p-5 pt-0">
                        <div className="fontS12 text-cusGrey">Aseptica, ООО</div>
                        <div className="mt-2 fontS16">АЙФЛОКС cтерильно глазные капли 0,3% 5 мл</div>
                        <div className="mt-2.5 mb-4 fontS18 fontW700">120 000 сум</div>
                    </div>
                </Link>
                <div className="flex justify-between p-5 pt-0">
                    <button className="bg-lightBlue py-3.5 px-3 rounded-md focus:outline-none hover:opacity-90">
                        <img src={likeIcon} alt="like" />
                    </button>
                    <button className="flex items-center bg-primary px-9 rounded-md focus:outline-none hover:opacity-90">
                        <img src={cartIcon} alt="cart" />
                        <div className="text-white fontS16 fontW500 ml-2.5">В корзину</div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCart;