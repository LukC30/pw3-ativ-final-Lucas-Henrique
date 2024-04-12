import styles from './container.css';
export default function Container(props){


    return(
    <div className={styles.container}>
        {props.children}
    </div>
    );
}