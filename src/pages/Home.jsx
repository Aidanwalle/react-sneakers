import Card from "../components/Card";

function Home({ items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToCart,
    onAddToFavorite, }) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>
                <div className="search-block d-flex align-center">
                    <img src="/img/icons/search.png" width={18} height={18} alt="Seacrh" />
                    {searchValue
                        && <img
                            src="/img/icons/btn-remove.png"
                            width={15}
                            height={15}
                            className="clear cu-p"
                            alt="clear"
                            onClick={() => setSearchValue('')}
                        />}
                    <input maxLength={15} onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                </div>
            </div>
            <div className="d-flex cardBlock">
                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item =>
                    <Card
                        key={item.id}
                        onPlus={(obj) => onAddToCart(obj)}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        {...item}
                    />)}
            </div>
        </div>
    )
}

export default Home