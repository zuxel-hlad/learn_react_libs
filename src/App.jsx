import styles from './App.module.scss';
import { useState } from 'react';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.parent}>
            <h1 className={styles.heading}>Helo Tailwind</h1>
            <div>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button
                    className={styles.button}
                    onClick={() => setIsOpen(prevOpen => !prevOpen)}
                >
                    Login
                </button>
            </div>
            {/* trasitions example*/}
            {isOpen && <button className="animate-fade">TEST</button>}
            <div className={styles.wrapper}>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, itaque?
                </span>
            </div>
        </div>
    );
};

export default App;
