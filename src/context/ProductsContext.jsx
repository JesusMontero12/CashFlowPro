import { createContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState([]);

  const 

  let data = { currentProduct };

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
