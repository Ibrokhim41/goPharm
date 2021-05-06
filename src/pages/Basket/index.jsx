import Breadcrumbs from '../../components/Breadcrumbs/index';
import ItemsBasket from '../../components/ItemsBasket';
// import EmptyBasket from '../../components/EmptyBasket/index';

const Basket = () => {

    return (
        <>
            <div className="container mx-auto pt-8">
                <Breadcrumbs />
                <div className="fontS24 fontW500 mt-4">Корзина</div>
                {/* <EmptyBasket /> */}
                <ItemsBasket />
            </div>
        </>
    )
}

export default Basket;