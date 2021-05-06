import DefaultInput from '../../components/DefaultInput';
import { useState } from 'react';
import DefaultButton from '../../components/DefaultButton';

const UserInfo = () => {

    const [userName, setUserName] = useState("User Name")
    const [userSurname, setUserSurname] = useState("User Surname")
    const [userBirthday, setuUserBirthday] = useState()

    return (
        <>
            <div className="fontS18 fontW500 mb-4">Персональные данные</div>
            <div className="flex justify-between">
                <DefaultInput val={userName} func={setUserName} customClass="px-4" />
                <DefaultInput val={userSurname} func={setUserSurname} customClass="px-4" />
            </div>
            <div className="flex justify-between">
                <DefaultInput
                    func={setuUserBirthday}
                    placeholder="Дата рождения"
                    customClass="px-4 mt-4" />
                <div className="W370 mx-auto flex justify-end items-center mt-4">
                    <input className="mr-2" type="radio" id="male" name="gender" value="male" />
                    <label for="male">Мужчина</label>
                    <input className="mr-2 ml-4" type="radio" id="female" name="gender" value="female" />
                    <label for="female">Женщина</label>
                </div>
            </div>
            <DefaultButton customClass="W370 bg-primary py-2.5 text-white fontS16 fontW500 mt-8 block ml-auto" text="Сохранить изменения" />

        </>
    )
}

export default UserInfo;