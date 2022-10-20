import React from "react";

import { FaTimes } from "react-icons/fa";


export default function Task({ id, completed, job, date, time, toggle, onDelete }) {
    const taskStyle = {
        display: "flex",
        marginBottom: "1em",
        borderRadius: "9px",
        paddingRight: "1em",
        background: "#d0a3a3",
        paddingTop: ".25em",
        alignItems: "center",
        paddingLeft: completed ? "0" : ".5em",
        justifyContent: "space-between"

    }



    return <div style={taskStyle} className="task"
        // onClick={() => toggle(id)}
    >
        {completed && <div style={{
            height: "4em",
            width: "1.5%",
            background: "green",
            borderRadius: "8px",

        }} className="completed"></div>}
        <div className="details">
            <h3>{job}</h3>
            <p>{`${date} at ${time}`}</p>
        </div>
        <div className="delete"

        >

            <FaTimes color="red" cursor="pointer" onClick={() => onDelete(id)} />
        </div>

    </div >
}