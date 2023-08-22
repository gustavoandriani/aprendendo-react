import { useState } from 'react'
import './App.css'

function App() {
  const [senha, setSenha] = useState('')
  const [text, setText] = useState('Copiar!')
  
  return (
    <>
      <h1>Gerador de Senhas</h1>

      <button 
        onClick={() => {
          setSenha((senha) => Math.random().toString(32).slice(2));
          setText((text) => "Copiar!");
        }}>
          Gerar!</button>
      <button 
        onClick={() => {
          navigator.clipboard.writeText(senha);
          setText((text) => "Copiado!");
        }}>
          {text}</button>

      <p id='senhaText'>{senha}</p>
    </>
  )
}

export default App
