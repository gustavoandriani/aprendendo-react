import { useState } from "react";
import ContainerInfos from "../components/ContainerInfos";
import ContainerTables from "../components/ContainerTables";
import BasicTable from "../components/BasicTable";

export default function Dashboard() {
    const [ listItens, setListItens ] = useState([])
    const [ listItensAcabando, setListItensAcabando ] = useState([])
    const [ listItensRecentes, setListItensRecentes ] = useState([])

    function salvarItem(item) {
        let newItem = [...listItens]
        newItem.push(item)
        setListItens(newItem)
    }

    function salvarItemAcabando(item) {
        let newItem = [...listItensAcabando]
        newItem.push(item)
        setListItensAcabando(newItem)
    }

    function salvarItemRecente(item) {
        let newItem = [...listItensRecentes]
        newItem.push(item)
        setListItensRecentes(newItem)
    }

    return (
        <main>
            <h2>Dashboard</h2>
            <ContainerInfos
                addNovoItem={salvarItem}
                listItens={listItens}
                addNovoItemAcabando={salvarItemAcabando}
                addNovoItemRecente={salvarItemRecente}
            />
            <ContainerTables
                listItensAcabando={listItensAcabando}
                listItensRecentes={listItensRecentes}
            />

            <BasicTable />
        </main>
    )
}