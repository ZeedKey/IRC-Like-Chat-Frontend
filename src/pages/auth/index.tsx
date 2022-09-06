import styles from './auth.module.sass';
import { Window } from '@common';
import { useState } from 'react';

const serverTitle = 'Server status';
const authTitle = 'IRC [Auth]';

export const Auth: React.FC = () => {
  const [isRegMode, setRegMode] = useState(false);
  
  return (
    <main>
      <section className={styles.server}>
        <Window title={serverTitle}>
          <div className={styles.server__body}>
            <ul className={styles.server__list}>
              <li>STATUS: ONLINE</li>
              <li>USERS ONLINE: 6</li>
              <li>ACTIVITY: High</li>
            </ul>
          </div>
        </Window>
      </section>
      <section className={styles.auth}>
        <Window title={authTitle}>
          <div className={styles.auth__welcome}>
            <p className={styles.auth__title}>
              Welcome to the IRC chat client.
              <span className={styles.auth__authtype}>
                Please, login
              </span>
            </p>
          </div>
          <form className={styles.auth__body}>
            <input placeholder="Enter your login" />
            <input placeholder="Enter your password" />
            <input type="submit" value="Submit" />
          </form>
          <button>
            <p>No account? Create a new one...</p>
          </button>
        </Window>
      </section>
    </main>
  );
};
