import ProductCart from '../ProductCart/index';


const SmilarProducts = () => {

    return (
        <>
            <div className="bg-lightBlue py-12">
                <div className="container mx-auto">
                    <div className="fontS24 fontW500 mb-7">Похожие препараты</div>
                    <div className="grid grid-cols-4 gap-8">
                        <ProductCart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmilarProducts;