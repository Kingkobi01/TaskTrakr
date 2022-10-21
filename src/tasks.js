import Task from "./components/Task"


export default function Tasks({ tasks, setTaskData }) {

  


    async function toggle(id) {
        const taskToToggle = await tasks.find(task => task.id === id)
        
        const toggledTask = {
            ...taskToToggle, reminder: !taskToToggle.reminder
        }
        
        
        const res = await fetch(`http://localhost:7000/tasks/${id}`, {
            method: "PUT",
            headers: {                
                "Content-type": "application/json"
            },
            body: JSON.stringify(toggledTask)
        })

        const updatedTask = await res.json()

            setTaskData(tasks.map(task => task.id === id ? {
                ...task, reminder: updatedTask.reminder
            } : task))
        

    }



    const deleteTask = async (id) => {
        await fetch(`http://localhost:7000/tasks/${id}`, {
            method: "DELETE"
        })


        setTaskData(tasks.filter(task => task.id !== id))

    }


    return (
        <div className="tasks"
            style={{
                maxHeight: "300px",
                overflowY: "auto"
            }}>
            {
                tasks.length === 0 ?
                    <p style={{
                        textAlign: "center",
                        margin: ".5em auto"
                    }}>
                        There are no tasks for you today
                    </p>
                    :
                    tasks.map((task) => {
                        return <Task
                            key={task.job + task.id}
                            {...task}
                            toggle={toggle}
                            deleteTask={deleteTask}

                        />
                    })}

        </div>)
}