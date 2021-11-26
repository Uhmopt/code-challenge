import { APP_NAME } from "lib/global";
import { combineReducers, createStore } from "redux";
import reducers from "./reducers";

const store = createStore(combineReducers(reducers));

store.subscribe(() => {
  const storeData = store.getState();
  window.sessionStorage.setItem(
    APP_NAME,
    JSON.stringify({ conf: storeData?.conf ?? {}, auth: storeData?.auth ?? {} })
  );
});

// const token = localStorage.getItem("access_token");
// if (token) {
//   store.dispatch({ type: "AUTH_CHECK" });
// }

export default store;
