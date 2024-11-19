import styles from "./index.module.css"

export function Banner({src}){
    return (
        <div className={styles.header}>
            <img className={styles.banner} src={src} alt="banner"/>
        </div>
    )
}