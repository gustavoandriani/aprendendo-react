import { useRef, useState } from 'react'
import './App.css'
import RefExample from './RefExample'

function App() {
  let variable = 0
  const [state, setState] = useState(0) // Tupla onde "state" refere ao valor e "setState" refere a função que define o valor.
  
  const ref = useRef(0) // Objeto que possui apenas um método, "current" onde ele nos retorna o valor de "ref"

  const showValues = () => {
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `)
  }

  return (
    <>
      <h2>Exemplo de useRef com DOM</h2>
      <RefExample />
      <hr />
      <h2>Conhecendo o useRef</h2>
      <hr />
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>

      <button
        onClick={() => { variable++ }}
      >
        Aumentar Variável
      </button>

      <button
        onClick={() => { ref.current++ }}
      >
        Aumentar Ref
      </button>

      <button
        onClick={() => { setState(state => state + 1) }}
      >
        Aumentar State
      </button>

      <hr />

      <button onClick={showValues}>Exibir valores</button>
    </>
  )
}

export default App
