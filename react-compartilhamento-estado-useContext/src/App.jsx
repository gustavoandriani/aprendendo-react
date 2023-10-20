import Container from "./components/Container"
import Header from "./components/Header"
import UserContext from "./contexts/UserContext"

export default function App() {
    const user = {
        name: "Gustavo",
        email: "gustavo@gmail.com"
    }

    return (
        <>
            <h1>Usando useContext</h1>
            <UserContext.Provider value={user}>
                <Header />

                <Container>
                    <p>Este é o nosso app com contexto</p>
                </ Container>
            </UserContext.Provider>

            <div>
                {/* NÃO HÁ CONTEXT AQUI */}
            </div>
        </>
    )
}