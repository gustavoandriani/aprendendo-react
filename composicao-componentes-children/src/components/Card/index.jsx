import styles from "./style.module.css"
import Button from "../Button"
import Title from "../Title"

export default function Card({ avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl }) {
    return (
        <div className={styles.card}>
            <img src={avatar} />
            <Title>
                <span>{name}</span>
                <button>Follow</button>
            </Title>

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