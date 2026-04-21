import './App.css'
import { CalcStudentList } from './components/CalcStudentsList'
import { Form } from './components/Form'
import { StudentFromDB } from './components/StudentsFromDB'

function App() {
  return (
    <div className="flex">
      <div className="flex-1 overflow-y-auto">
        <StudentFromDB></StudentFromDB>
      </div>
      <div className="mx-10 p-20 flex flex-col bg-blue-400 h-min rounded-2xl items-center shadow-2xl min-w-75">
        <Form></Form>
        <CalcStudentList></CalcStudentList>
      </div>
    </div>
  )
}

export default App
