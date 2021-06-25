import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootReducer, { exampleInitialState } from "./reducers";
import rootSaga from "./sagas";

export const makeStore = (initialState = exampleInitialState) => {
  let store;

  const sagaMiddleware = createSagaMiddleware();

  const isClient = typeof window !== "undefined";

  if (isClient) {
    const { persistReducer, persistStore } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "root",
      storage,
    };

    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      applyMiddleware(sagaMiddleware)
    );
    store.sagaTask = sagaMiddleware.run(rootSaga);
    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(sagaMiddleware)
    );
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  return store;
};

const wrapper = createWrapper(makeStore);
export { wrapper };