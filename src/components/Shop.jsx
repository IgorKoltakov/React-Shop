import { useState, useEffect, createContext } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { BasketList } from "../components/BasketList";
import { Alert } from "./Alert";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Context = createContext(null);

function Shop() {
  const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("order")) ?? [];
  };
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(getLocalStorage());
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  useEffect(
    function localStorage() {
      window.localStorage.setItem("order", JSON.stringify(order));
      console.log(`set order ${order}`);
    },
    [order]
  );

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

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
    setAlertName(item.displayName);
  };

  const removeFromBasket = (itemId) => {
    const newArrOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newArrOrder);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  return (
    <Context.Provider
      value={{
        handleBasketShow,
        addToBasket,
        removeFromBasket,
        incQuantity,
        decQuantity,
        closeAlert,
        goods,
        loading,
        order,
        setOrder,
        isBasketShow,
        alertName,
      }}
    >
      <Header />
      <section className="main">
        {loading ? (
          <Preloader />
        ) : (
          <div className="container master">
            <GoodsList />
          </div>
        )}
        <BasketList />
        {alertName && <Alert />}
      </section>
      <Footer />
    </Context.Provider>
  );
}

export { Shop };
