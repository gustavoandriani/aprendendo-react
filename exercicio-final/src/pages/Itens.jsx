import { TableCell, TableRow, TextField } from "@mui/material"
import BasicTable from "../components/BasicTable"
import useListItens from "../hooks/useListItens"
import { Link } from "react-router-dom"
import MuiButton from "../components/MuiButton"
import { useState } from "react"
import BasicTabs from "../components/BasicTabs"

export default function Itens() {
    const { items, addItem } = useListItens()
    const [ name, setName ] = useState("")
    const [ desc, setDesc ] = useState("")
    const [ qntd, setQntd ] = useState(0)

    const formItem = (ev) => {
        ev.preventDefault()

        addItem({ name, qntd, desc })
        setName("")
        setDesc("")
        setQntd("")
    }
    return (

        <div style={{ color: "white"}}>
            <BasicTabs 
                tabOneContent={
                    <BasicTable tableHead={3}
                        tableContent={
                            items.length > 0 ? (items.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell align="right">{item.qntd}</TableCell>
                                    <TableCell align="right">
                                        <Link to={`${item.id}`}>
                                            <MuiButton
                                                textButton="VER"
                                                colorButton="warning"
                                            />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))
                            ) : <h2>Nenhum item adicionado!</h2>
                        }
                    />
                }

               tabTwoContent={
                <form
                    onSubmit={formItem}
                    style={{ display: "flex", flexDirection: "column"}}
                >
                    <TextField
                        sx={{ margin: "1rem" }}
                        id="outlined-basic"
                        label="Nome do Item"
                        variant="outlined"
                        value={name}
                        required
                        onChange={(ev) => setName(ev.target.value)}
                    />
                    <TextField
                        sx={{ margin: "1rem" }}
                        id="outlined-basic"
                        label="Quantidade de itens"
                        variant="outlined"
                        value={qntd}
                        required
                        onChange={(ev) => setQntd(ev.target.value)}
                    />
                    <TextField
                        sx={{ margin: "1rem" }}
                        id="outlined-multiline-static"
                        label="Descrição do item"
                        multiline
                        rows={4}
                        value={desc}
                        onChange={(ev) => setDesc(ev.target.value)}
                    />
                    <MuiButton 
                        textButton="ADICIONAR"
                        colorButton="error"
                        type="submit"
                    />
                </form>
                
               }
            />
        </div>
    )
}

