import { useState } from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)

  return (
    <>
      <h1>Gerador de senhas</h1>

      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <input
          type="number"
          id="passwordSize"
          min={1}
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}  
        />
      </div>
      <button 
        onClick={() => {
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
          let newPassword = ""
          for (let i = 0; i < passwordSize; i++) {
            const position = Math.floor(Math.random() * characters.length)
            newPassword += characters[position]
          }
        setPassword(newPassword)
        setCopyText("Copiar");
      }}>Gerar senha de {passwordSize} caracteres</button>

      <button
        onClick={() => {
          navigator.clipboard.writeText(password);
          setCopyText("Copiado!");
        }}>{copyText}</button>

      <div>{password}</div>
    </>
  )
}

export default App
