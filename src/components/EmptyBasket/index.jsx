import emptyBasket from '../../assets/empty_cart.png'
import DefaultButton from '../DefaultButton'

const EmptyBasket = () => {

    return (
        <>
            <div className="w-80 mx-auto text-center py-12">
                <img className="mx-auto" src={emptyBasket} alt="emptyBasket" />
                <div className="fontS20 fontW500 mt-6">Ваша корзина пуста</div>
                <div className="fontS16 mt-5">Выберите необходимый товар из каталога или с помощью поиска</div>
                <DefaultButton text="В каталог" customClass="bg-primary text-white fontS16 fontW500 py-2.5 px-14 mt-5" />
            </div>
        </>
    )
}

export default EmptyBasket;