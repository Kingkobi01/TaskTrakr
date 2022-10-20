

export default function Form() {
    return <form style={{ marginBlock: "1em" }}>
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
}