import React from "react";

import { FaTimes } from "react-icons/fa";


export default function Task(props) {
    const taskStyle = {
        display: "flex",
        marginBottom: "1em",
        borderRadius: "9px",
        paddingRight: "1em",
        background: "#d0a3a3",
        paddingTop: ".25em",
        alignItems: "center",
        paddingLeft: props.completed ? "0" : ".5em",
        justifyContent: "space-between"

    }


    return <div style={taskStyle} className="task" >
        {props.completed && <div style={{
            height: "4em",
            width: "1.5%",
            background: "green",
            borderRadius: "8px",

        }} className="completed"></div>}
        <div className="details">
            <h3
                onClick={() => props.toggle(props.id)}>
                {props.job}</h3>
            <p>{`${props.date} at ${props.time}`}</p>
        </div>
        <div className="delete"
            onClick={() => props.deleteTask(props.id)}>

            <FaTimes style={{
                color: "red"
            }} />
        </div>
    </div>
}