function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between m-30">Корзина
                    <img className="cu-p" width={18} height={18} src="/img/icons/btn-remove.png" alt="Close"
                        onClick={onClose} />
                </h2>
                {
                    items.length > 0
                        ? <div>
                            <div className="items">
                                {items.map((obj) => (
                                    <div className="cartItem d-flex align-center mb-20">
                                        {/* <div style={{ backgroundItem: `url(${obj.imageUrl})` }} className="cartItemImg"></div> */}
                                        <img src={obj.imageUrl} className="cartItemImg" alt="itemImage" />
                                        <div className="mr-20 flex">
                                            <p className="mb-5">{obj.title}</p>
                                            <b>{obj.price} руб.</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="removeBtn" width={18} height={18} src="/img/icons/btn-remove.png" alt="Remove" />
                                    </div>
                                ))}
                            </div>
                            <div className="cartTotalBlock">
                                <ul className="cartTotalBlock">
                                    <li className="d-flex">
                                        <span>Итого:</span>
                                        <div></div>
                                        <b>21 498 руб.</b>
                                    </li>
                                    <li className="d-flex">
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <b>1 074 руб.</b>
                                    </li>
                                </ul>
                                <button className="greenButton">Оформить заказ
                                    <img src="/img/icons/arrow.png" width={20} height={20} alt="Arrow" />
                                </button>
                            </div>
                        </div>
                        : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                            <img className="mb-20" width={120} height={120} src="/img/stickers/catInBox.png" alt="Empty cart" />
                            <h2>Корзина пустая (ну почти...)</h2>
                            <p className="opacity-6">Выньте кота и добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button onClick={onClose} className="greenButton">
                                <img width={20} height={20} src="/img/icons/arrow.png" alt="Arrow" />
                                Вернуться назад
                            </button>
                        </div>
                }
            </div>
        </div >
    )
}

export default Drawer