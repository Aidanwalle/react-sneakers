import React from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios.get('http://localhost:3004/sneakers').then((res) => {
      setItems(res.data)
    })
    axios.get('http://localhost:3004/cart').then((res) => {
      setCartItems(res.data)
    })
    axios.get('http://localhost:3004/favorites').then((res) => {
      setFavorites(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => item.id === obj.id)) {
      setCartItems(prev => prev.filter(item => item.id !== obj.id))
      axios.delete(`http://localhost:3004/cart/${obj.id}`)
    } else {
      axios.post('http://localhost:3004/cart', obj)
      setCartItems(prev => [...prev, obj])
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`http://localhost:3004/favorites/${obj.id}`)
      } else {
        const { data } = await axios.post('http://localhost:3004/favorites', obj)
        setFavorites(prev => [...prev, data])
      }
    }
    catch (error) {
      alert('Не удалось добавить в фавориты!')
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:3004/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer
        items={cartItems}
        onClose={() => setCartOpened(false)}
        onRemove={onRemoveItem}
      />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="d-flex">
        <Routes>
          <Route path="/favorites" element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />}
          />
          <Route path="/" element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
            />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;