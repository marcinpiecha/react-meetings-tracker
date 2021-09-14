import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
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
  ])

  const deleteTask = (id) => {
    //console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header title={'Meeting Tracker'}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ( 'No Meetings for Today.' )}
    </div>
  );
}

/* 
// for class based components
// don't fonrget to include " import React from 'react' " for React.Component

class App extends React.Component {
  render() {
    return <div className='container'>
      <Header />
      <p>class based</p>
    </div>
  }
}
*/

export default App;
