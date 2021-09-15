import Task from './Task'

/*
const tasks = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Dec 20th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Mar 5th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shoopping',
        day: 'Jun 1st at 3:00pm',
        reminder: true,
    }
]
*/

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task)=> (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks