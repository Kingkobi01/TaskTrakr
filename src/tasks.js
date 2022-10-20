import Task from "./components/Task"
import { useState } from "react"

const tasks = [
    {
        id: 0,
        job: "Doctor's Appointment",
        date: "Feb 5th",
        time: "2:30pm",
        reminder: false
    },
    {
        id: 1,
        job: "Meeting at School",
        date: "Feb 6th",
        time: "1:30pm",
        reminder: true
    },
    {
        id: 2,
        job: "Dinner with Mom",
        date: "Feb 8th",
        time: "7:00pm",
        reminder: false
    },
]
export default function Tasks() {

    const [taskData, setTaskData] = useState(tasks)

    function toggle(id) {
        setTaskData(taskData.map(task => task.id === id ? {
            ...task, reminder: !task.reminder
        } : task))

    }



    function deleteTask(id) {
        console.log("deleting...", id);
        setTaskData(tasks.filter(task => task.id !== id))

    }


    return <div className="tasks" style={{
        maxHeight: "300px",
        overflowY: "auto"
    }}>

        {tasks.map((task) => {
            return <Task

                key={task.job + task.id}
                {...task}
                toggle={toggle}
                onDelete={deleteTask}
            />
        })}

    </div>
}