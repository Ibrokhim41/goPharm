import emptyFav from '../../assets/emptyFav.png'
import DefaultButton from '../DefaultButton'
import { Link, useHistory } from 'react-router-dom';

const EmptyFavorite = () => {

    const router = useHistory()

    return (
        <>
            <div className="w-80 mx-auto text-center py-12">
                <img className="mx-auto" src={emptyFav} alt="emptyBasket" />
                <div className="fontS20 fontW500 mt-6">В избранном пока пусто</div>
                <div className="fontS16 mt-5">Добавьте необходимые товары из каталога в избранное</div>
                <DefaultButton
                    func={() => router.push('/catalog')}
                    text="В каталог"
                    customClass="bg-primary text-white fontS16 fontW500 py-2.5 px-14 mt-5 mx-auto" />
            </div>
        </>
    )
}

export default EmptyFavorite;