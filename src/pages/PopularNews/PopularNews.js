import './popularNews.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_POPULAR_NEWS } from '../../redux/constants';

const PopularNews = () => {
    // const dispatch = useDispatch();
    const news = useSelector(state => state?.news?.popularNews);
    const loading = useSelector(state => state?.news?.loading);
    const error = useSelector(state => state?.errors?.popularNewsError);

    // useEffect(() => {
    //     dispatch({ type: GET_POPULAR_NEWS });
    // }, [dispatch]);

    const renderNews = news.map(popularNews => (
        <li key={popularNews.created_at_i}>{popularNews.title}</li>
    ));

    return (
        <section className="latest-news">
            <div className="container">
                <h1>PopularNews</h1>
                <div className="news">
                    <ul className="latest">
                        {loading ? <li><h3>LOADING...</h3></li> : null}
                        {!loading && !error && news.length ? renderNews : null}
                        {!loading && !error && !news.length ? <li>no news yet</li> : null}
                        {error || !news ? <li><h3>ERROR</h3></li> : null}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PopularNews;
