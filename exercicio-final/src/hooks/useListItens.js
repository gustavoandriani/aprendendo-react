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

    const editItem = (id) => {
    //    
    //    //Identificar a mudança a ser feita;
    //    //Alterar dentro do objeto;
    //    //Salvar mudanças no localStorage
        setItems(state => {
            const newState = state.find(item => item.id) //Identificar o item através do ID;
        })
    }

    return { items, addItem, removeItem }
}