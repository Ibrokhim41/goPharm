import DefaultInput from '../DefaultInput/index';
import DefaultButton from '../DefaultButton/index';
import { useEffect, useState } from 'react';
import useOnclickOutside from "react-cool-onclickoutside";


const AuthForm = () => {

    const [tel, setTel] = useState("")
    const [textIn, setText] = useState('Чтобы совершать покупки, копить бонусы и иметь быстрый доступ к карте лояльности войдите или зарегистрируйтесь')
    const [confirm, setConfirm] = useState(null)
    const [counter, setCounter] = useState(0)

    const ref = useOnclickOutside(() => {
        setTel(null)
    })

    useEffect(() => {
        if (counter !== 0) {
            var interval = setInterval(() => {
                setCounter(counter - 1);
            }, 1000)
        }

        return () => clearInterval(interval);
    }, [counter]);

    const authUser = () => {
        tel && setText(`Проверочный код отправлен на номер`);
        setCounter(120)
    }


    return (
        <>
            <div className="w-1/3 flex flex-col items-center mx-auto text-center py-24">
                <div className="fontS24 fontW500 mb-6">Регистрация</div>
                <div className="fontS16 text-cusGrey mb-6">
                    {textIn}
                    {textIn.length < 40 && <div>{tel}</div>}
                </div>
                <form onClick={(e) => e.preventDefault()}>
                    {counter === 0 ?
                        <input
                            onFocus={() => setTel('+998')}  
                            onBlur={() => setTel('')}
                            onChange={(e) => tel.length !== 11 && setTel(e.target.value)}
                            placeholder="Введите номер телефона"
                            className="py-2.5 border-2 border-borderCol rounded-md bg-bgGrey focus:outline-none fontS15 text-cusGrey W370 px-4" type="tel" 
                            value={tel}
                        />

                        :
                        <div className="relative">
                            <DefaultInput
                                func={setConfirm}
                                val={confirm}
                                placeholder="Код подтверждения"
                                customClass="W370 px-4" />
                            <div className="absolute top-0 right-0 h-full flex items-center mr-4 text-cusGrey">
                                {counter}
                            </div>
                        </div>
                    }
                    <DefaultButton
                        onClick={authUser}
                        text={counter ? 'Подтвердить' : `Получить код активации`}
                        customClass="W370 mt-6 bg-primary text-white" />

                    <div className="flex text-center text-cusGrey fontS16 fontW500 mt-6">
                        Есть аккаунт?
                <div className="ml-4 text-primary cursor-pointer">Войти</div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AuthForm;