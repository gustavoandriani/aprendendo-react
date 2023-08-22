import styles from "./style.module.css"

export default function Button({ url, textButton }) {
    return (
        <a className={styles.lButton} href={url} target="_blank">{textButton}</a>
    )
}