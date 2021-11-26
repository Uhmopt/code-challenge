import { APP_NAME } from "lib/global";
import { jsonParse } from "lib/json";
import { formatStore, updateStore } from "./tools";
const initialState = { isDark: false };

const restoreState = {
  ...initialState,
  ...(jsonParse(localStorage.getItem(APP_NAME))?.conf ?? {}),
};

const conf = (state = restoreState, { type, payload = null }) => {
  switch (type) {
    case "SET_CONFIG":
      return formatStore(updateStore(state, payload));
    case "UPDATE_CONFIG":
      return formatStore(updateStore(state, payload));
    case "RESET_CONFIG":
      return initialState;
    default:
      return state;
  }
};

export default conf;
