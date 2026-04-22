import './App.css'
import { CalcStudentList } from './components/CalcStudentsList'
import { Form } from './components/Form'
import { StudentFromDB } from './components/StudentsFromDB'

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="mx-10 p-20 flex flex-col bg-blue-400 h-min rounded-2xl items-center shadow-2xl min-w-75 mt-4">
        <Form />
        <CalcStudentList />
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto pr-4">
        <StudentFromDB />
      </div>
    </div>
  )
}

export default App
