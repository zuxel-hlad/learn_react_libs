import {
    SET_LATEST_NEWS,
    SET_POPULAR_NEWS,
    SET_LOADING,
} from '../constants';

export const setLoading = payload => ({
    type: SET_LOADING,
    payload,
});

export const setLatestNews = payload => ({
    type: SET_LATEST_NEWS,
    payload,
});

export const setPopularNews = payload => ({
    type: SET_POPULAR_NEWS,
    payload,
});

