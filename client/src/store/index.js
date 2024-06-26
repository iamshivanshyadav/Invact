import { createStore, applyMiddleware, combineReducers ,compose} from 'redux';
import { thunk } from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import movieReducer from '../reducers/movieReducer';

const rootReducer = combineReducers({
    movies: movieReducer,
});

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);

export default store;
