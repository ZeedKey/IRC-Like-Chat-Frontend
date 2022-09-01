import { Message, Window } from "@common";
import styles from "./chat.module.sass";

export const Chat: React.FC = () => {
  return (
    <main>
      <Window title="IRC [Global] [Channel - 1]">
        <div className={styles.content}>
          <section className={styles.chat}>
            <div className={styles.chat__messages}>
            </div>
            <form className={styles.chat__input}>
              <input />
            </form>
          </section>
          <section className={styles.users}>

          </section>
        </div>
      </Window>
    </main>
  );
};
