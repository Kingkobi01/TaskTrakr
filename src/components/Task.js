import React from "react";

import { FaTimes } from "react-icons/fa";


export default function Task({ id, reminder, job, date, time, toggle, deleteTask }) {
    const taskStyle = {
        display: "flex",
        marginBottom: "1em",
        borderRadius: "9px",
        borderLeft: `7px solid ${reminder ? "red" : "green"}`,
        paddingRight: "1em",
        paddingLeft: "2em",
        background: "#d0a3a3",
        paddingTop: ".25em",
        alignItems: "center",
        justifyContent: "space-between"

    }



    return <div style={taskStyle} className="task"
        onDoubleClick={() => toggle(id)}
    >

        <div className="details"

        >
            <h3>{job}</h3>
            <p>{`${date} at ${time}`}</p>
        </div>
        <div className="delete"

        >

            <FaTimes color="red" cursor="pointer" onClick={() => deleteTask(id)} />
        </div>

    </div >
}