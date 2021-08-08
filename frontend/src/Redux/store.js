import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { registerReducer } from "./SignUp/reducer";
import { LoginReducer } from "./LogIn/reducer";
import { testreducer } from "./TestRegister/reducer";

const rootReducer = combineReducers({
  register: registerReducer,
  login: LoginReducer,
  RegisterTest:testreducer
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
