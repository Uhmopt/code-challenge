import { APP_NAME } from "lib/global";
import { jsonParse } from "lib/json";
import { formatStore, updateStore } from "./tools";
const initialState = { isDark: false, isLoading: false };

const restoreState = {
  ...initialState,
  ...(jsonParse(localStorage.getItem(APP_NAME))?.app ?? {}),
};

const app = (state = restoreState, { type, payload = null }) => {
  switch (type) {
    case "SET_APP":
      return formatStore(updateStore(state, payload));
    case "UPDATE_APP":
      return formatStore(updateStore(state, payload));
    case "RESET_APP":
      return initialState;
    default:
      return state;
  }
};

export default app;
