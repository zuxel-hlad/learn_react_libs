import { combineReducers } from 'redux';
import { news } from './news';
import { errors } from './errors';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
export const { createReduxHistory, routerMiddleware, routerReducer } =
    createReduxHistoryContext({
        history: createBrowserHistory(),
    });

const reducer = combineReducers({
    router: routerReducer,
    news,
    errors,
});

export default reducer;
