import { useSelector, useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);
    console.log(store);
    return (
        <div className="app">
            <button
                className="btn btn-primary"
                onClick={() =>
                    dispatch({
                        type: 'LOAD_DATA',
                    })
                }
            >
                dispatch click
            </button>
        </div>
    );
};

export default App;
