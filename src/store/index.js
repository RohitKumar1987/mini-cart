//import { createStore, applyMiddleware } from 'redux'
import { createStore } from 'redux'
//import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
//import logger from 'redux-logger'
import rootReducer from './reducers'
//import mySaga from './sagas'

//const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  //applyMiddleware(logger, sagaMiddleware)
)
//sagaMiddleware.run(mySaga)
export const persistor = persistStore(store)
