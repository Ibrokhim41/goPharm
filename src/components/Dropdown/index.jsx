import { useState } from 'react';
import down from '../../assets/icon.svg'
import useOnclickOutside from 'react-cool-onclickoutside';

function Dropdown({ icon, text, items, cusClass, hidden = false }) {

    const [droped, setDroped] = useState(false)

    const ref = useOnclickOutside(() => {
        setDroped(false)
    })

    return (
        <div 
            ref={ref}
            className={`relative flex items-center ${cusClass}`} onClick={() => setDroped(!droped)}>
            {icon && (
                <img className="w-5 h-5 mr-1 object-contain" src={icon} alt="icon"></img>
            )}
            <div className="cursor-pointer">{text}</div>
            <img src={down} className="w-2 ml-2" alt="icon"></img>
            { droped && !hidden && <div className="absolute bg-white w-max top-full rounded mt-2 z-20">
                {items.length &&
                    items.map((item) => (
                        <div className="cursor-pointer flex items-center my-2 py-1.5 px-4 bg-white hover:bg-lightBlue" onClick={() => setDroped(!droped)}>
                            {item.flag && (
                                <img
                                    className="w-5 h-5 mr-1 object-contain"
                                    src={item.flag}
                                 alt="icon"></img>
                            )}
                            {item.lang}
                        </div>
                    ))
                }
            </div> }
        </div>
    );
};

export default Dropdown;