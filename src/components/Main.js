import { React, useState, useEffect } from "react";
import Form from "./Form";

import Tasks from "../tasks";
export default function Main({ showForm }) {

    const [tasks, setTaskData] = useState([])




    const addTask = async (newTask) => {

        const res = await fetch("http://localhost:7000/tasks", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newTask)
        })


        const data = await res.json()
        setTaskData([...tasks, data])


    }


    const getTasks = () => {
        fetch("http://localhost:7000/tasks")
            .then(res => res.json())
            .then(body => setTaskData(body))
    }
    useEffect(getTasks, [])



    return <main style={{
        width: "95%",
        marginInline: "auto",
        fontSize: "1.4rem"
    }}>
        {showForm && <Form tasks={tasks} setTaskData={setTaskData} addTask={addTask} />}
        <h3>Tasks</h3>
        <Tasks tasks={tasks} setTaskData={setTaskData} />
    </main>
}