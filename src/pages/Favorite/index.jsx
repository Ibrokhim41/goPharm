import Breadcrumbs from "../../components/Breadcrumbs";
import EmptyFavorite from "../../components/EmptyFavorite"
import ProductCart from "../../components/ProductCart";


const Favorite = () => {

    return (
        <div className="container mx-auto pt-8">
            <Breadcrumbs />
            <div className="fontS24 fontW500 mt-4">Избранное</div>
            <EmptyFavorite />
            {/*  */}
            <div className="grid grid-cols-4">
                <div className="col-span-1">
                    <ProductCart />
                </div>
            </div>
        </div>
    )
}

export default Favorite;