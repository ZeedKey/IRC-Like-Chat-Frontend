import { Window } from '@common';
import styles from './auth.module.sass';

export const Auth: React.FC = () => {
  return (
    <main className={styles.auth}>
      <section className={styles.auth__enter}>
        <Window title="IRC [Auth]">
          <div className={styles.auth__welcome}>
            <h5>Welcome to the IRC-client</h5>
          </div>
          <form className={styles.auth__form}>
            <div className="field-row-stacked">
              <label htmlFor="text22">Login</label>
              <input id="text22" type="text" />
            </div>
            <div className="field-row-stacked">
              <label htmlFor="text23">Password</label>
              <input id="text23" type="password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </Window>
      </section>

      <section className={styles.auth__servers}>
        <Window title="Server status">
          <ul>
            <li>
              Connectivity: <span>STABLE</span>
            </li>
            <li>Users online: 6</li>
            <li>
              Status: <span>operational</span>
            </li>
            <li>
              Message sending frequency: <span>RARE</span>
            </li>
          </ul>
        </Window>
      </section>
    </main>
  );
};
