import likeIcon from '../../assets/like.svg'
import cartIcon from '../../assets/shopping_cart_16.svg'
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductCart = ({ name, image, price, slug }) => {

    const history = useHistory()

    return (
        <>
            <div className="w-full bg-white shadow-md rounded-md cursor-pointer">
                {/* <Link to="/product"> */}
                <div onClick={() => history.push(`/product/${slug}`)}>
                    <div className="w-64 h-48">
                        <img className="w-full h-full object-contain" src={image} alt="image" />
                    </div>
                    <div className="p-5 pt-0">
                        <div className="fontS12 text-cusGrey">{slug}</div>
                        <div className="mt-2 fontS16">{name}</div>
                        <div className="mt-2.5 mb-4 fontS18 fontW700">{price}</div>
                    </div>
                </div>
                {/* </Link> */}
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