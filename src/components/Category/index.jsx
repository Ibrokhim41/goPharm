import arrowIcon from '../../assets/arrow_right.svg'
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useOnclickOutside from "react-cool-onclickoutside";
import { connect } from 'react-redux'
import { fetchCategory, fetchDrugsByCategory, getCategorySlug } from '../../redux/actions';

const Category = ({ showCatalog = null, categories, fetchCategory, fetchDrugsByCategory}) => {

    useEffect(() => {
        console.log(categories);
        fetchCategory()
    }, [])

    const history = useHistory()

    const [showSubCatId, setShowSubCatId] = useState(0);
    const [showSubCat, setShowSubCat] = useState(false);

    const route = useHistory()
    

    const ref = useOnclickOutside(() => {
        setShowSubCat(false)
    })

    window.addEventListener('scroll', () => {
        setShowSubCat(false)
    })


    return (
        <>
            <div className={`relative w-full shadow-md fontS16 bg-white`}>
                {categories.length ? categories.map((item, i) => (
                    <>
                        <div
                            onClick={() => {
                                fetchDrugsByCategory(item.slug)
                                route.push('/catalog')
                            }}
                            onMouseEnter={() => {
                                setShowSubCatId(i)
                                setShowSubCat(true)
                            }}
                            onMouseLeave={() => {
                                setShowSubCat(false)
                            }}
                            key={item.id}
                            className="w-full flex items-center justify-between py-3 hover:bg-lightBlue cursor-pointer">
                            <div className="flex items-center px-4">
                                <img className="w-11 object-contain" src={item.image} alt="icon"></img>
                                <p className="ml-4">{item.name}</p>
                            </div>
                            {item.childs.length ? <img className="pr-4" src={arrowIcon} alt="icon"></img> : null}
                        </div>
                        <div
                            onMouseEnter={() => setShowSubCat(true)}
                            onMouseLeave={() => setShowSubCat(false)}
                            ref={ref}
                            className={`${item.childs.length ? '' : 'hidden'} absolute top-0 -right-full bg-white w-full h-full z-10 border-l-2 border-borderCol overflow-y-scroll ${showSubCat && showSubCatId === i ? '' : 'hidden'}`}>
                            {item.childs.length ? item.childs.map((item, i) => (
                                // <Link to="/catalog">
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            history.push(`/catalog/${item.slug}`)
                                            // showCatalog && showCatalog(false)
                                            // getCategorySlug(item.slug)
                                        }}
                                        className={`hover:bg-lightBlue cursor-pointer py-3`}>
                                        <p className="ml-4">{item.name}</p>
                                    </div>
                                // </Link>
                            )) : null }
                        </div>
                    </>
                )): null }
            </div>
        </>
    );
}


const mapStateToProps = state => {
    return {
        categories: state.categories.category
    }
}

const mapDispatchToProps = {
    fetchCategory,
    fetchDrugsByCategory,
    getCategorySlug,
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
