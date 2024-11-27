import styles from "./index.module.css"
import banner from '../../assets/banner.webp'

export function Banner(){
    return (
        <div className={styles.header}>
            <img className={styles.banner} src={banner} alt="banner"/>
        </div>
    )
}