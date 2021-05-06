
import DefaultInput from '../DefaultInput/index';
import DefaultButton from '../DefaultButton/index';
import { useState } from 'react';

const AuthInfo = () => {

    const [userName, setUserName] = useState("")
    const [userSurname, setUserSurname] = useState("")
    const [userBirthday, setuUserBirthday] = useState("")

    return (
        <>
            <div className="w-1/3 flex flex-col items-center mx-auto text-center py-24">
                <div className="fontS24 fontW500 mb-6">Персональные данные</div>
                <div className="fontS16 text-cusGrey mb-6">
                    Заполните поля с персональными данными для того, чтобы создать аккаунт и совершать покупки, копить бонусы, а также иметь быстрый доступ к карте лояльности
                </div>
                <form onClick={(e) => e.preventDefault}>
                    <DefaultInput
                        func={setUserName}
                        value={userName}
                        placeholder="Имя"
                        customClass="W370 px-4" />
                    <DefaultInput
                        func={setUserSurname}
                        value={userSurname}
                        placeholder="Фамилия"
                        customClass="W370 px-4 mt-4" />
                    <DefaultInput
                        func={setuUserBirthday}
                        placeholder="Дата рождения"
                        customClass="W370 px-4 mt-4" />
                    <div className="W370 mx-auto flex items-center mt-4">
                        <input className="mr-2" type="radio" id="male" name="gender" value="male" />
                        <label for="male">Мужчина</label>
                        <input className="mr-2 ml-4" type="radio" id="female" name="gender" value="female" />
                        <label for="female">Женщина</label>
                    </div>
                    <DefaultButton
                        func={() => { }}
                        text="Сохранить"
                        customClass="W370 mt-6 bg-primary text-white" />
                </form>
            </div>
        </>
    )
}

export default AuthInfo;