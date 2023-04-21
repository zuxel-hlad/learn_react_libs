import Header from './components/Header/Header';

const App = ({ children }) => {
    return (
        <div className="App">
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default App;
