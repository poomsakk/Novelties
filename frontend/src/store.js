import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducer/userReducer';


//const userInfo = localStorage.getItem("userInfo") || null;

const initialState = {
    //user: { userInfo },
};

const reducer = combineReducers({
    user: userReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;