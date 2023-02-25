import styles from './UiButton.module.scss';
import cn from 'classnames';
export const UiButton = (props) => {
    return (
        <button
            style={{backgroundColor: props.color, padding: props.padding}}
            className={cn(styles.loginButton, props.className)}
        >
            <div className={styles.loginButton__icon}>
                {props.icon}
            </div>
            {props.name}
        </button>
    );
};

