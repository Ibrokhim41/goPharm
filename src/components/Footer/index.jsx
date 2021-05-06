import logo from '../../assets/Logo.svg'
import facebookIcon from '../../assets/Group 3468.svg'
import instagramIcon from '../../assets/Group 3469.svg'
import twitterIcon from '../../assets/Group 3470.svg'
import tiktokIcon from '../../assets/Group 3471.svg'
import vkontakteIcon from '../../assets/Group 3472.svg'
import youtubeIcon from '../../assets/Group 3473.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="border border-borderCol">
                <div className="container mx-auto grid grid-cols-4 pt-12 pb-8">
                    <div className="col-span-1">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <div className="pt-7 pb-1.5">Круглосуточный колл-центр</div>
                        <a className="fontW500 fontS24" href="tel:+998 (71) 205-0-888">+998 (71) 205-0-888</a>
                        <div className="flex justify-between mt-7">
                            <a href="#"><img src={facebookIcon} alt="" /></a>
                            <a href="#"><img src={instagramIcon} alt="" /></a>
                            <a href="#"><img src={twitterIcon} alt="" /></a>
                            <a href="#"><img src={tiktokIcon} alt="" /></a>
                            <a href="#"><img src={vkontakteIcon} alt="" /></a>
                            <a href="#"><img src={youtubeIcon} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-1">
                        <div className="mb-6">
                            <div className="inline-block hover:text-primary cursor-pointer">О компании GoPharm</div>
                        </div>
                        <div className="mb-6">
                            <div className="inline-block hover:text-primary cursor-pointer">Каталог товаров</div>
                        </div>
                        <div className="mb-6">
                            <div className="inline-block hover:text-primary cursor-pointer">Карта аптек</div>
                        </div>
                        <div className="mb-6">
                            <div className="inline-block hover:text-primary cursor-pointer">Полезные статьи</div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="mb-6">
                            <div className="inline-block hover:text-primary cursor-pointer">Оплата</div>
                        </div>
                        <div className="mb-6">
                            <div className="inline-block hover:text-primary cursor-pointer">Доставка</div>

                        </div>
                        <div className="mb-6">
                            <div className="inline-block hover:text-primary cursor-pointer">Получение в магазине</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-center">
                Gopharm © 2020. Все права защищены.
        </div>
        </>
    )
}
export default Footer;
