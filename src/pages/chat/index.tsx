import { Message, Window } from '@common';
import styles from './chat.module.sass';

export const Chat: React.FC = () => {
  return (
    <main>
      <Window title="IRC [Global] [Channel - 1]">
        <div className={styles.content}>
          <section className={styles.chat}>
            <div className={styles.chat__messages}>
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </div>
            <form className={styles.chat__filter}>
              <input
                type="search"
                placeholder="Search for a message"
              />
            </form>
            <form className={styles.chat__input}>
              <input type="search" placeholder="Enter your message" />
            </form>
          </section>
          <section className={styles.users}></section>
        </div>
      </Window>
    </main>
  );
};
