import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { userInfoReducer } from './reducer/userReducer';


const userInfo = JSON.parse(localStorage.getItem("userInfo")) || 0;

const initialState = {
    userInfo: { userInfo }
};

const reducer = combineReducers({
    userInfo: userInfoReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;