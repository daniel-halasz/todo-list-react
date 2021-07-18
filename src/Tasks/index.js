import "./style.css"

const Tasks = (props) => (
    <ul className="section__list">
        {props.tasks.map(task => (
            <li className={`section__listItem ${(task.done && props.hideDoneTask) ? "section__listTask--hidden" : ""}`}>
                <button className="section__listButton section__listButton--done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`section__listTask ${task.done ? " section__listTask--done" : ""}`}>
            {task.content}
            </span>
            <button className="section__listButton section__listButton--remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;