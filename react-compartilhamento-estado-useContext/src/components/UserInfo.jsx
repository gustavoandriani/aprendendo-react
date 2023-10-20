import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function UserInfo() {
    const userInfos = useContext(UserContext)

    return (
        <div>
            <h3>Informações do usuário</h3>
            <p>Nome: {userInfos.name}</p>
            <p>Email: {userInfos.email}</p>
        </div>
    )
}