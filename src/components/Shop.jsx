import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from '../components/BasketList';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
  };

  const removeFromBasket = (itemId) => {
    const newArrOrder = order.filter((el) => el.id !== itemId);
    setOrder(newArrOrder);
  };

  const incQuantity = (itemId) => {
    const newQuantity = order.map((el) => {
      if (el.id === itemId) {
        return {
          ...el,
          quantity: el.quantity + 1,
        };
      }
      return order;
    });
    setOrder(newQuantity);
  };

  const decQuantity = (itemId) => {
    const newQuantity = order.map((el) => {
      if (el.id === itemId) {
        return {
          ...el,
          quantity: el.quantity + 1,
        };
      }
      return order;
    });
    setOrder(newQuantity);
  };

  return (
    <main className="conteiner content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
    </main>
  );
}

export { Shop };
