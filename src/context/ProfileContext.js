import React from "react";
import axios from "axios";

import config from "../config";
import { rows } from "../pages/ecommerce/mock";

const ProfileContext = React.createContext();

const rootReducer = (state, action) => {
  switch (action.type) {
    case "getProfile":
      return {
        isLoaded: true,
        Profile: action.payload,
   
      };
    case "EDIT_PRODUCT":
      const index = action.payload.id;
      return {
        ...state,
        isLoaded: true,
        products: state.products.map(c => {
          if (c.id === index) {
            return { ...c, ...action.payload };
          }
          return c;
        })
      };

    case "GET_IMAGES":
      return {
        ...state,
        images: action.payload
      };

    case "CREATE_PRODUCT":
      state.products.push(action.payload);
      return {
        ...state,
        isLoaded: true,
        products: state.products
      };

    default:
      return {
        ...state
      };
  }
};
async function list() {
    const response = await axios.get(`/APIUser/Student/1`);
    return response.data;
  }
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = React.useReducer(rootReducer, {
    isLoaded: false,
    products: rows
  });
  return (
    <ProfileContext.Provider value={{ products, setProducts }}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProductsState = () => {
  const context = React.useContext(ProfileContext);
  return context;
};

export function getProfilesRequest(dispatch) {
  // We check if app runs with backend mode
  if (config.isBackend) {
    return axios.get("/APIUser/Student/1").then(res => {
      dispatch({ type: "getProfile", payload: res.data });
    });
  }
}

export function deleteProductRequest({ id, history, dispatch }) {
  // We check if app runs with backend mode
  if (!config.isBackend) return;

  if (Array.isArray(id)) {
    for (let key in id) {
      axios.delete("/products/" + id[key]).then(res => {});
    }
  } else {
    axios.delete("/products/" + id).then(res => {
      getProductsRequest(dispatch);
      if (history.location.pathname !== "/app/ecommerce/management") {
        history.push("/app/ecommerce/management");
      }
      return;
    });
  }
  getProductsRequest(dispatch);
}

export function getProductInfo(dispatch) {
  // We check if app runs with backend mode
  if (config.isBackend) {
    axios.get("/products").then(res => {
      dispatch({ type: "UPDATE_PRODUCTS", payload: res.data });
    });
  }
}

export function updateProduct(product, dispatch) {
  // We check if app runs with backend mode
  if (!config.isBackend) return;

  axios.put("/products/" + product.id, product).then(res => {
    dispatch({ type: "EDIT_PRODUCT", payload: res.data });
  });
}

export function createProduct(product, dispatch) {
  // We check if app runs with backend mode
  if (!config.isBackend) return;

  axios.post("/products", product).then(res => {
    dispatch({ type: "CREATE_PRODUCT", payload: res.data });
  });
}

export function getProductsImages(dispatch) {
  // We check if app runs with backend mode
  if (!config.isBackend) return;

  const replacer = data => {
    return data.map(c => {
      return c.replace(
        /http:\/\/.+\//,
        "https://flatlogic-node-backend.herokuapp.com/assets/products/"
      );
    });
  };

  axios.get("/products/images-list").then(res => {
    dispatch({ type: "GET_IMAGES", payload: replacer(res.data) });
  });
}

export { ProductsProvider, ProfileContext, useProductsState };
