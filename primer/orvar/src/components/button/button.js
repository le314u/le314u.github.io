import styles from './index.module.css'

export function Button({path, text}){
    return (
        <div className={styles.button}>
            <a className={styles.link} href={path}>{text}</a>
        </div>
    )
}