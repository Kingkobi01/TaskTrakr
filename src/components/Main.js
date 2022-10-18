import { React, useState } from "react";
import Task from "./Task";
import tasks from "../tasks";
export default function Main() {
    const [taskData, setTaskData] = useState(tasks)

    function toggle(id) {

        const newTaskSet = taskData.map(task => {
            if (task.id === id) {
                return {
                    ...task, completed: !task.completed
                }

            } else {
                return task
            }
        })

        setTaskData(prevTaskData => newTaskSet)


    }

    function deleteTask(id) {
        console.log(id);
        const newTaskSet = taskData.map(task => task.id === id ? "" : task)


        setTaskData(prevTaskData => newTaskSet)
    }
    return <main style={{
        width: "95%",
        marginInline: "auto",
        fontSize: "1.4rem"
    }}>
        <form style={{ marginBlock: "1em" }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1em"

            }}>

                <label htmlFor="task">Task</label>
                <input style={{
                    width: "92.5%",
                    marginInline: "auto"
                }} type="text" name="task" id="task" placeholder="Add Task" />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1em"

            }}>

                <label htmlFor="date">Date & Time</label>
                <input style={{
                    width: "92.5%",
                    marginInline: "auto"
                }} type="text" name="date" id="date" placeholder="Add Date & Time" />
            </div>

            <div>
                <label style={{
                    marginRight: ".5em",
                }} htmlFor="reminder">Set Reminder</label>
                <input style={{
                    transform: "scale(1.5)",
                    outline: "none",
                    border: "none"
                }} type="checkbox" name="reminder" id="reminder" />
            </div>

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
        </form>
        <div className="tasks">
            {taskData.map((task) => {
                return <Task
                    key={task.id}
                    {...task}
                    toggle={toggle}
                    deleteTask={deleteTask}
                />
            })}

        </div>
    </main>
}