import { createContext, useState, useEffect } from 'react'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [productItems, setProductItems] = useState([])

  const addToList = (item) => {
    const isItemInList = productItems.find((productItems) => productItems.key === item.key);
    if (!isItemInList) {
      setProductItems([...productItems, item]);
    }
  };

  const removeFromList = (item) => {
    const isItemInList = productItems.find((productItems) => productItems.key === item.key);
    if (isItemInList) {
      setProductItems(productItems?.filter((productItems) => productItems.key !== item.key));  
    }
  };

  const clearList = () => {
    setProductItems([]);
  };

  return (
    <ProductContext.Provider
      value={{
        productItems,
        addToList,
        removeFromList,
        clearList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};