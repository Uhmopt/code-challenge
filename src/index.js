import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { SERVER_URI } from "lib/global";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "style/index.scss";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./store";

const apolloClient = new ApolloClient({
  uri: SERVER_URI,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
