import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function Header() {
    const userInfos = useContext(UserContext)

    return (
        <header>
            <h2>Bem-vindo, {userInfos.name}</h2>
            <hr />
        </header>
    )
}