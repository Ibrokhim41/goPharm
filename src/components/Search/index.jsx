

const Search = ({drugs}) => {

    return (
        <>
            {drugs.map((drug) => {
                <div className="absolute top-full left-0 w-full flex bg-cusGrey" key={drug.id}>
                    <img className="w-8" src={drug.image} alt="image" />
                    <div>{drug.name}</div>
                    <div>{drug.price}</div>
                </div>
            })}
        </>
    )
}

export default Search;