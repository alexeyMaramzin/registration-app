import styles from './Button.module.scss';
export const UiButton = (props) => {
    return (
        <button
            style={{backgroundColor: props.color, padding: props.padding}}
            className={styles.loginButton}
        >
            {props.name}
        </button>
    );
};

