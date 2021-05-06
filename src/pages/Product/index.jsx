import cartIcon from '../../assets/shopping_cart_16.svg';
import Arrow from '../../assets/Arrow.svg';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import SmilarProducts from '../../components/SimilarProducts';
import Breadcrumbs from '../../components/Breadcrumbs';

const Product = () => {

    return (
        <>
            <div className="container mx-auto py-8">
                <Breadcrumbs />
                {/* Product main details */}
                <div className="flex pt-12 pb-8 gap-5">
                    <img className="rounded-md productImg object-contain" src="https://www.al-agzakhana.com/wp-content/uploads/2018/11/Trimol.jpg" alt="" />
                    <div>
                        <div className="fontS24 fontW500">АЙФЛОКС cтерильно глазные капли 0,3% 5 мл</div>
                        <div className="pt-4 pb-6 text-primary">Aseptica, ООО</div>
                        <div className="fontS24 fontW700">120 000 сум</div>
                        <Rate value={3.5} allowHalf={true} />
                        <div className="py-6 fontW500 fontS18">Описание</div>
                        <div className="flex">
                            <div className="mr-10">
                                <div className="fontS16">Дротаверин</div>
                                <div className="fontS12 text-cusGrey">Действующее вещество</div>
                            </div>
                            <div className="mr-10">
                                <div className="fontS16">Франция</div>
                                <div className="fontS12 text-cusGrey">Страна происхождения</div>
                            </div>
                            <div className="mr-10">
                                <div className="fontS16">Капсулы</div>
                                <div className="fontS12 text-cusGrey">Форма выпуска</div>
                            </div>
                        </div>
                        <button className="flex items-center bg-primary px-9 py-3 mt-10 rounded-md focus:outline-none hover:opacity-90">
                            <img src={cartIcon} alt="cart" />
                            <div className="text-white fontS16 fontW500 ml-2.5">В корзину</div>
                        </button>
                    </div>
                </div>
                {/* details */}
                <div className="grid grid-cols-3">
                    <div className="col-span-1 h-min sticky top-24">
                        <div className="flex mb-7 cursor-pointer hover:text-primary">
                            <img src={Arrow} alt="arrow" />
                            <div className="fontS16 ml-2.5">Условия хранения</div>
                        </div>
                        <div className="flex mb-7 cursor-pointer hover:text-primary">
                            <img src={Arrow} alt="arrow" />
                            <div className="fontS16 ml-2.5">Срок годности и дата изготовления</div>
                        </div>
                        <div className="flex mb-7 cursor-pointer hover:text-primary">
                            <img src={Arrow} alt="arrow" />
                            <div className="fontS16 ml-2.5">Фармалогическое дейсвие</div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="fontS18 fontW500 mb-5">Состав</div>
                        <div className="fontS16 text-cusGrey mb-6">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</div>
                        <div className="fontS18 fontW500 mb-5">Состав</div>
                        <div className="fontS16 text-cusGrey mb-6">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</div>
                        <div className="fontS18 fontW500 mb-5">Состав</div>
                        <div className="fontS16 text-cusGrey mb-6">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</div>
                        <div className="fontS18 fontW500 mb-5">Состав</div>
                        <div className="fontS16 text-cusGrey mb-6">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</div>

                    </div>
                </div>
            </div>
            <SmilarProducts />
        </>
    )
}

export default Product;

