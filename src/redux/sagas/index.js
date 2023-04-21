import {
    takeLatest,
    put,
    call,
    fork,
    all,
    select,
} from '@redux-saga/core/effects';
import { LOCATION_CHANGE } from 'redux-first-history';
import {
    SET_LATEST_NEWS_ERROR,
    SET_POPULAR_NEWS_ERROR,
} from '../constants';
import { getLatestNews } from '../../api';
import { setLatestNews } from '../actions/actionCreator';
import { getPopularNews } from '../../api';
import { setPopularNews } from '../actions/actionCreator';
import { setLoading } from '../actions/actionCreator';

//запустится в зависимости от запущенного екшена. бизнеслогика
export function* latestNewswWorker() {
    // throw new Error();
    yield put(setLoading(true));
    try {
        const { hits } = yield call(getLatestNews, 'react');
        yield put(setLatestNews(hits));
        yield put(setLoading(false));
    } catch (e) {
        yield put(setLoading(false));
        yield put({
            type: SET_LATEST_NEWS_ERROR,
            payload: 'Error fetching latest news',
        });
    }
}

export function* popularNewsWorker() {
    yield put(setLoading(true));
    try {
        const { hits } = yield call(getPopularNews);
        yield put(setPopularNews(hits));
        yield put(setLoading(false));
    } catch {
        yield put(setLoading(false));
        yield put({
            type: SET_POPULAR_NEWS_ERROR,
            payload: 'Error fetching popular news',
        });
    }
}

//следит за екшенами. ждет екшн и выполняет действия
// export function* watchLatestNews() {
//     yield takeEvery(GET_LATEST_NEWS, latestNewswWorker);
// }

// export function* watchPopularNews() {
//     yield takeEvery(GET_POPULAR_NEWS, popularNewsWorker);
// }

export function* watchNewsSaga() {
    const path = yield select(({ router }) => router.location.pathname);

    if (path === '/latest-news') {
        yield call(latestNewswWorker);
    }

    if (path === '/popular-news') {
        yield call(popularNewsWorker);
    }
}

//корневая сага
export default function* rootSaga() {
    // yield all([fork(watchPopularNews), fork(watchLatestNews)]);
    yield takeLatest(LOCATION_CHANGE, watchNewsSaga);
}
