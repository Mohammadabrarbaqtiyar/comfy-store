import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev-pu8wyk-g.us.auth0.com
// 7vHgXJ01aWGyMVLWdZUwQSUapigdjfKu

//dev--1jcnhnz.eu.auth0.com
//F38hPibOuP7pBspvpDXhvXYF7pvz6SEW
ReactDOM.render(
  <Auth0Provider
    domain="dev--1jcnhnz.eu.auth0.com"
    // {process.env.REACT_APP_AUTH_DOMAIN}
    clientId="F38hPibOuP7pBspvpDXhvXYF7pvz6SEW"
    // {process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
