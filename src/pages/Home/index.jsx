import "react-responsive-carousel/lib/styles/carousel.min.css";
import trustIcon from '../../assets/trust.svg'
import delivertIcon from '../../assets/delivery.svg'
import economyIcon from '../../assets/economy.svg'
import contratIcon from '../../assets/contract.svg'
import arrow from '../../assets/arrow_right.svg'
import appStore from '../../assets/app-store.svg'
import playMarket from '../../assets/play-market.svg'
import mobileImg from '../../assets/Frame 3987.png'
import { Carousel } from "react-responsive-carousel";
import Category from "../../components/Category";
import ProductCart from '../../components/ProductCart'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Home = () => {

    const [drugs, setDrugs] = useState([])


    useEffect(() => {
        fetch('https://test.gopharm.uz/api/v1/drugs')
            .then(response => response.json())
            .then(data => setDrugs(data.results))
    }, [])


    const items = [
        {
            title: 'Доверие',
            text: 'Более 15 000 обслуженных и лояльных клиентов.',
            icon: trustIcon
        },
        {
            title: 'Доставка',
            text: 'Не доставили за 90 минут? Доставка БЕСПЛАТНО.',
            icon: delivertIcon
        },
        {
            title: 'Экономия',
            text: 'Бонусные баллы - Покупайте и зарабатывайте.',
            icon: economyIcon
        },
        {
            title: 'Надежность',
            text: 'Более 12,000 наименований товаров.',
            icon: contratIcon
        },
    ]


    return (
        <>
            <div className="container mx-auto grid grid-cols-3 pt-2">
                <div className="col-span-1">
                    <Category />
                </div>
                <div className="col-span-2 flex items-center pl-10 rounded-lg">
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                    >
                        <div className="rounded-full">
                            <img
                                className="rounded-xl"
                                src="https://api.gopharm.uz/media/sales/dde635fa-eaf6-4027-923c-7321e5a095e3.png"
                            ></img>
                        </div>
                        <div>
                            <img
                                className="rounded-xl"
                                src="https://api.gopharm.uz/media/sales/68e7a668-fbc3-4a67-b583-1dda7b0b15e1.jpg"
                            ></img>
                        </div>
                        <div>
                            <img
                                className="rounded-xl"
                                src="https://api.gopharm.uz/media/sales/33528891-d9ff-4841-a19c-7efa7b62877b.jpg"
                            ></img>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="bg-lightBlue mt-24 py-14">
                <div className="container mx-auto">
                    <div className="text-center fontS24 fontW500">
                        <p>Интернет-аптека GoPharm:</p>
                        <p>Почему стоит заказывать лекарства у нас?</p>
                    </div>
                    <div className="grid grid-cols-4 mt-11">
                        {items.map((item) => (
                            <div className="col-span-1 flex flex-col items-center">
                                <img className="w-16 h-16" src={item.icon}></img>
                                <div className="py-1 fontS18 fontW700">{item.title}</div>
                                <div className="text-center fontS15 text-cusGrey">{item.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Лучшие предложения */}
            <div className="container mx-auto mt-24 mb-16">
                <div className="flex justify-between mb-11">
                    <div className="fontS24">Лучшие предложения</div>
                    <div className="flex items-center">
                        <Link to="/catalog" className="fontS16 fontW500 mr-2.5 text-primary">Смотреть все</Link>
                        <img className="w-3" src={arrow} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-7">
                    {drugs.length && drugs.map((item) => (
                        <div className="col-span-1" key={item.id}>
                            <ProductCart name={item.name} image={item.image} slug={item.slug} price={item.price} />
                        </div>
                    ))}
                </div>
            </div>
            {/* app */}
            <div className="bg-lightBlue">
                <div className="container mx-auto flex justify-between gap-12">
                    <img src={mobileImg} alt="mobile" />
                    <div className="pt-14">
                        <div className="fontS28 fontW700">Установите новое мобильное приложение GoPharm</div>
                        <div className="fontS16 mt-5 mb-8">
                            Все необходимые товары уже в вашем телефоне! Установите мобильное приложение и находите то, что нужно за секунды прямо с телефона!
                        </div>
                        <div className="flex gap-10">
                            <a href="#">
                                <img src={appStore} alt="appStore" />
                            </a>
                            <a href="#">
                                <img src={playMarket} alt="playMarket" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;