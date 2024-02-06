import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {// Czy onClick jest dobrze przekzane?
    return (<button className={clsx(styles.button, props.className)} onClick={props.onClick}>{props.children}</button>);
};

export default Button;