import styles from './message.module.sass';

export const Message: React.FC = () => {
  return (
    <div className={styles.message}>
      <h2 className={styles.message__createdAt}>
        [11:55 22.02.2022]
      </h2>
      <h2 className={styles.message__author}>Wannega</h2>
      <h2 className={styles.message__content}>Message</h2>
    </div>
  );
};
