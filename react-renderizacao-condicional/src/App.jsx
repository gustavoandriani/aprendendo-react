import { useState } from 'react'
import Input from './components/Input'

export default function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8
  return (
    <>
      <h1>Gerador de senhas</h1>

      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input 
          type="checkbox" 
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      {showInput ? (
        <div>
          <label htmlFor="passwordSize">Tamanho:</label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize}/>
        </div>
      ) : null }
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