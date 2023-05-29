import { createContext, useContext, useEffect, useState } from "react";
import { GetCartList } from "../services/services";
import { useAuth } from "./auth-context";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cartData, setCartData] = useState(null);
  const authValue = useAuth();

  const updateCart = (cart) => {
    setCartData(cart);
  };

  // initial fetch
  const fetchCartList = async () => {
    const res = await GetCartList({
      encodedToken: authValue.token,
    });
    setCartData(res?.data?.cart);
  };

  console.log("crat data", cartData);

  useEffect(() => {
    fetchCartList();
  }, []);

  return (
    <DataContext.Provider value={{ item: 55, updateCart, cartData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
