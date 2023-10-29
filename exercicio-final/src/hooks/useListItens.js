import { useState } from "react";

export default function useListItens() {
    const [ items, setItems ] = useState(() => {
        const listItens = localStorage.getItem("estoque-lib")
        if(!listItens) return []
        return JSON.parse(listItens)
    })

    const addItem = ({ name, qntd, desc}) => {
        const id = Math.floor(Math.random() * 1000000)
        let addData = Date.now()
        const item = { id, name, qntd, desc, addData }
        setItems(state => {
            const newState = [...state, item]
            localStorage.setItem("estoque-lib", JSON.stringify(newState))
            return newState
        })
    }

    const removeItem = (id) => {
        setItems(state => {
            const newState = state.filter(item => item.id !== id)
            localStorage.setItem("estoque-lib", JSON.stringify(newState))
            return newState
        })
    }

    return { items, addItem, removeItem }
}