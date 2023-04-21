import styles from './latestNews.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_LATEST_NEWS } from '../../redux/constants';

const LatestNews = () => {
    // const dispatch = useDispatch();
    const news = useSelector(state => state?.news?.latestNews);
    const loading = useSelector(state => state?.news?.loading);
    const error = useSelector(state => state?.errors?.latestNewsError);

    // useEffect(() => {
    //     dispatch({ type: GET_LATEST_NEWS });
    // }, [dispatch]);

    const renderNews = news.map(latestNews => {
        return <li className={styles.latestNewsItem} key={latestNews.created_at_i}>{latestNews.title}</li>;
    });

    console.log();

    return (
        <section className="latest-news">
            <div className="container">
                <h1>LatestNews</h1>
                <div className="news">
                    <ul className="latest">
                        {loading ? <li><h3>LOADING...</h3></li> : null}
                        {!loading && !error && news.length ? renderNews : null}
                        {!loading && !error && !news.length ? <li>no news yet</li> : null}
                        {error && !news.length ? <li><h3>ERROR</h3></li> : null}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
