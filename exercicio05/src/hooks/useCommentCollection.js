import { useState } from "react";

export default function useCommentCollection() {
    const [comments, setComments] = useState(() => {
        const storedComments = localStorage.getItem("guan-comments-lib")
        if(!storedComments) return[]
        return JSON.parse(storedComments)
    })

    const addComment = ({ email, texto }) => {
        const id = Math.floor(Math.random() * 1000000)
        const comment = { id, email, texto }
        setComments(state => {
            const newState = [...state, comment]
            localStorage.setItem("guan-comments-lib", JSON.stringify(newState))
            return newState
        })
    }

    const removeComment = (id) => {
        setComments(state => {
            const newState = state.filter(comment => comment.id !== id)
            localStorage.setItem("guan-comments-lib", JSON.stringify(newState))
            return newState
        })
    }

    return { comments, addComment, removeComment }
}