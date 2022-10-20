import { React, useState } from "react";
import Form from "./Form";

import Tasks from "../tasks";
export default function Main() {

    return <main style={{
        width: "95%",
        marginInline: "auto",
        fontSize: "1.4rem"
    }}>
        <Form />
        <h3>Tasks</h3>    
        <Tasks />
    </main>
}