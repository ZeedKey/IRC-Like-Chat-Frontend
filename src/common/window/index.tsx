import styles from './window.module.sass'

type ModalProps = {
  title: string;
  children: React.ReactNode;
};

export const Window: React.FC<ModalProps> = ({ children, title }) => {
  return (
    <div
      className={`window ${styles.window_theme}`}
    >
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
      </div>
      <div
        className={`window-body ${styles["window-body_theme"]}`}
      >
        {children}
      </div>
    </div>
  );
};
