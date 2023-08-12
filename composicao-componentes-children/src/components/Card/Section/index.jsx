import styles from "./styles.module.css"

export default function Section(props) {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}