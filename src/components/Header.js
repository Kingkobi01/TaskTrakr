import React from "react";
import { Button } from "react-bootstrap";


export default function Header({showForm, setShowForm}) {
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "4em",
        width: "95%",
        margin: "1em auto",
      
        

    }

    const toggleFormDisplay = () => {
        setShowForm(!showForm)
    }
    return <header style={style}>
        <h1 style={{fontWeight:"600"}}>TaskTrakr</h1>
        <Button variant={showForm? "danger" : "success"} onClick={toggleFormDisplay}>{showForm? "Close": "Add"}</Button>

    </header>
}