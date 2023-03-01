import { takeEvery, put, call, fork } from 'redux-saga/effects';

const swapiGet = async pattern => {
    const request = await fetch(`https://swapi.dev/api/${pattern}`);
    return await request.json();
};

export function* loadPeople() {
    const people = yield call(swapiGet, 'people');
    yield put({ type: 'SET_PEOPLE', payload: people.results });
    console.log('load people');
}

export function* loadPlanets() {
    const planets = yield call(swapiGet, 'planets');
    yield put({ type: 'SET_PLANETS', payload: planets.results });
    console.log('load planets');
}

export function* workerSaga() {
    console.log('run paralel tasks');
    yield fork(loadPeople);
    yield fork(loadPlanets);
    console.log('finish paralel tasks');
}

export function* watchLoadDatakSaga() {
    yield takeEvery('LOAD_DATA', workerSaga);
}

export default function* rootSaga() {
    yield fork(watchLoadDatakSaga);
}
