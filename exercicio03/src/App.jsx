import { useState } from 'react'
import viteLogo from '/vite.svg'
import Card from './components/Card'

function App() {
  return (
    <>
     <h1
      style={{
        textAlign: "center",
        color: "#fff"
      }}
     >Exercício 03</h1>

      <Card
        avatar={"./avatar1.avif"}
        name={"Gustavo J. Andriani"}
        bio={"Front-end Developer with React"}
        phone={"(16) 996192224"}
        email={"liam.alvesandriani@gmail.com"}
        githubUrl={"http://github.com/gustavoandriani"}
        linkedinUrl={"https://www.linkedin.com/in/gustavo-andriani/"}
        twitterUrl={"https://twitter.com/Guuh_Andriani"}
        /> 
    </>
  )
}

export default App
