import React from 'react'
import styles from './Card.module.css'

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false }) {

    const [isAdded, setIsAdded] = React.useState(false)
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus({ id, title, imageUrl, price })
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onFavorite({ id, title, imageUrl, price })
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} >
                <img onClick={onClickFavorite}
                    width={18}
                    height={18}
                    src={`/img/icons/heart-${isFavorite ? "liked.png" : "unliked.png"}`} 
                    alt="Unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    width={18}
                    height={18}
                    src={isAdded ? "/img/icons/btn-checked.png" : "/img/icons/btn-plus.png"}
                    alt="Plus" />
            </div>
        </div>
    )
}

export default Card