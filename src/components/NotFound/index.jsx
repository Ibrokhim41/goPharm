import FoF from "../../assets/404.png"
import DefaultButton from "../DefaultButton"

const NotFound = () => {

    return (
        <>
            <div className="H900 bg-cover bg-center text-center flex items-end justify-center" style={{background: `url(${FoF})`}}>
                <div className="mb-56">
                    <div className="fontS50 fontW800 text-white">Страница не найдена!</div>
                    <div className="fontS18 mt-5 mb-9 text-white">Страница которую вы ищите удалена или не существовала :(</div>
                    <DefaultButton text="Главная страница" customClass="w-80 py-2.5 mx-auto fontS16 fontW500 text-primary bg-white" />
                </div>
            </div>
        </>
    )
}

export default NotFound;