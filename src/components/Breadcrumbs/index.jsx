import arrow from '../../assets/arrow_right.svg';
import { useLocation, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Breadcrumbs = () => {

    const [breadcrumbs, setBreadcrumbs] = useState(
        [
            {
                title: 'Главная',
                path: '/'
            }
        ]
    )
    const bredcrumLength = breadcrumbs.length - 1
    const routePath = useLocation().pathname
    const route = useHistory()

    useEffect(() => {
        const newPath = {
            title: routePath,   
            path: `/${routePath}`
        }
        setBreadcrumbs([{...breadcrumbs, newPath}])
    }, [])

    return (
        <>
            <div className="flex items-center">
                {breadcrumbs.map((item, i) => (
                    <div className="flex" key={i}>
                        <div
                            onClick={() => route.push(item.path)}
                            className={`${bredcrumLength === i && 'text-cusGrey'}`}>{item.title}</div>
                        {bredcrumLength > i && <img className={`mx-2.5 w-4`} src={arrow} alt="arrow" />}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Breadcrumbs;