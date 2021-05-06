import arrow from '../../assets/arrow_right.svg';

const Breadcrumbs = () => {

    const breadcrumbs = ['Главная', 'Витамины и БАДЫ', 'Для женщин', 'АЙФЛОКС cтерильно глазные капли 0,3% 5 мл']
    const bredcrumLength = breadcrumbs.length - 1

    return (
        <>
            <div className="flex items-center">
                {breadcrumbs.map((title, i) => (
                    <>
                        <div className={`${bredcrumLength === i && 'text-cusGrey'}`}>{title}</div>
                        {bredcrumLength > i && <img className={`mx-2.5 w-4`} src={arrow} alt="arrow" />}
                    </>
                ))}
            </div>
        </>
    )
}

export default Breadcrumbs;