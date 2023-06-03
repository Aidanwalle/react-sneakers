import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/logo.png" alt="Logo" />
                    <div>
                        <h3>React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex text-uppercase">
                <li className="mr-30 cu-p" onClick={props.onClickCart}>
                    <img width={18} height={18} src="/img/icons/cart.png" alt="Cart" />
                    <span>1205 руб.</span>
                </li>
                <li className="cu-p">
                    <Link to="/favorites">
                        <img width={18} height={18} src="/img/icons/heart-unliked.png" alt="Favorites" />
                    </Link>
                </li>
                <li>
                    <img width={18} height={18} src="/img/icons/user.png" alt="User" />
                </li>
            </ul>
        </header>
    )
}

export default Header