

import { useState } from "react"

export default function Form({ tasks, setTaskData, addTask }) {


    const [newTask, setNewTask] = useState({
        id: tasks.length,
        job: "",
        date: "",
        time: "",
        reminder: true
    })



    const handleChange = (e) => {
        const { type, name, value, checked } = e.target

        setNewTask(prevNewTask => ({
            ...prevNewTask,
            [name]: type === "checkbox" ? checked : value
        }))

    }



    return <form style={{ marginBlock: "1em" }} onSubmit={(e) => {
        e.preventDefault()

        if (newTask.job === "" | newTask.date === "" | newTask.time === "") {
            alert("Please Fill in the neccessary data!")
            return
        }
        addTask(newTask)
        setNewTask(prevNewTask => ({
            ...prevNewTask, job: "", date: "", time: "", reminder: false
        }))

    }}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1em"

        }}>

            <label htmlFor="task">Task</label>
            <input style={{
                width: "92.5%",
                marginInline: "auto"
            }} type="text"
                name="job"
                value={newTask.job}
                id="task"
                onChange={handleChange}
                placeholder="Add Task" />
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1em"

        }}>

            <label htmlFor="date">Date</label>
            <input style={{
                width: "92.5%",
                marginInline: "auto"
            }}
                onChange={handleChange}
                type="text" name="date" value={newTask.date} id="date" placeholder="Add Date" />
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1em"

        }}>

            <label htmlFor="time">Time</label>
            <input style={{
                width: "92.5%",
                marginInline: "auto"
            }}
                onChange={handleChange}
                type="text" name="time" value={newTask.time} id="time" placeholder="Add TIme" />
        </div>

        <div style={{
            textAlign: "center",
        }}>
            <label className="reminder-checkbox" htmlFor="reminder" style={{
                display: "inline-flex",
                cursor: "pointer"
            }}>
                <input type="checkbox" checked={newTask.reminder} name="reminder" id="reminder" style={{
                    display: "none",
                }}
                    onChange={handleChange}
                />
                <div className="custom-checkbox" style={{
                    marginRight: "1em",
                    width: "1.25em",
                    height: "1.25em",
                    borderRadius: " 50%",
                    border: " #0B032D 1px solid",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}></div>
                Set Reminder
            </label>
        </div >

        <button style={{
            display: "block",
            width: "100%",
            outline: "none",
            border: "none",
            borderRadius: "10px",
            marginBlock: "1em",
            padding: ".5em",
            background: "#0B032D",
            color: "#F67E7D",
            fontWeight: "600"


        }}>Save Task</button>
    </form >
}