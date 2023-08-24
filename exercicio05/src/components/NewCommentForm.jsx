import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "./TextInput"

NewCommentForm.propTypes = {
    addComment: PropTypes.func
}

export default function NewCommentForm({ addComment }) {
    const [ email, setEmail ] = useState("")
    const [ texto, setTexto ] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addComment({ email, texto })
        setEmail("")
        setTexto("")
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <TextInput
                id={email}
                label={"E-mail"}
                value={email}
                setValue={setEmail}
            />

            <TextInput
                id={texto}
                label={"Digite seu comentário"}
                value={texto}
                setValue={setTexto}
            />

            <button type="submit">Enviar comentário</button>
        </form>
    )
}