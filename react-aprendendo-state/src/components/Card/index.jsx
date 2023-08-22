import styles from "./style.module.css"
import Button from "../Button"
import { useState } from "react"

export default function Card({ avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl }) {
    const [followText, setFollowText] = useState("Follow")

    function handleClick(ev) {
        alert("Agora você está seguindo este usuário.")
        setFollowText("Following")
    }

    return (
        <div className={styles.card}>
            <img src={avatar} />
            <h2>{name}</h2>
            <button
                className={styles.followButton}
                onClick={handleClick}
            >
                {followText}
            </button>

            <hr />

            <p>
                <strong>BIO</strong>
                <br />
                {bio}
            </p>

            <hr />

            <p>
                <strong>PHONE</strong>
                <br />
                {phone}
            </p>

            <hr />

            <p>
                <strong>E-MAIL</strong>
                <br />
                {email}
            </p>

            <hr />

            <Button url={githubUrl} textButton={"GitHub"}/>
            <Button url={linkedinUrl} textButton={"LinkedIn"}/>
            <Button url={twitterUrl} textButton={"Twitter"}/>
        </div>
    )
}