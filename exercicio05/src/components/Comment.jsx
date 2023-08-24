import PropTypes from "prop-types"

Comment.propTypes = {
    email: PropTypes.string,
    texto: PropTypes.string,
    onRemove: PropTypes.func
}

export default function Comment({ email, texto, onRemove }) {
    return (
        <div>
            <h3>{email}</h3>
            <p>{texto}</p>
            <button onClick={onRemove}>Apagar comentário</button>
        </div>
    )
}