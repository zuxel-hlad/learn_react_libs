import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PopularNews, LatestNews, Home } from './pages/pages';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { Routes, Route } from 'react-router-dom';
import store from './redux/store';
import { history } from './redux/store';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/latest-news" element={<LatestNews />} />
                        <Route path="/popular-news" element={<PopularNews />} />
                    </Routes>
                </App>
            </Router>
        </Provider>
    </React.StrictMode>
);
