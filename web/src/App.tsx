import './App.css'
import { CalcStudentList } from './components/CalcStudentsList'
import { Form } from './components/Form'
import { StudentFromDB } from './components/StudentsFromDB'
import { useState, useEffect } from 'react'
import { api } from './services/api'
import type { Student } from './types/student'

function App() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await api.get('/students')
        setStudents(response.data.students)
      } catch (error) {
        console.log('Erro ao buscar alunos', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStudents()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="mx-10 p-20 flex flex-col bg-blue-400 h-min rounded-2xl items-center shadow-2xl min-w-75 mt-4">
        <Form />
        <CalcStudentList students={students} />
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto pr-4">
        <StudentFromDB students={students} />
      </div>
    </div>
  )
}

export default App
