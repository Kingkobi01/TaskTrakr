import React from "react";
import { Button } from "react-bootstrap";


export default function Header() {
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "4em",
        width: "95%",
        margin: "1em auto",
      
        

    }
    return <header style={style}>
        <h1 style={{fontWeight:"600"}}>TaskTrakr</h1>
        <Button variant="danger">Close</Button>

    </header>
}