import { legacy_createStore } from "redux";
import reducer from "./reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persisConfig, reducer)
const store = legacy_createStore( persistedReducer );

const persistor = persistStore(store);

export { persistor };
export default store;