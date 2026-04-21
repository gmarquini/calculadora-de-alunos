import { useEffect, useState } from 'react'
import { api } from '../services/api'

type Student = {
  id: string
  name: string
  classes: number
  absences: number
  value: number
}

function StudentFromDB() {
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

  const list = students.map((student) => (
    <div className="flex flex-col bg-blue-500 text-white w-80 h-min p-3 rounded-md">
      <h3>Nome: {student.name}</h3>
      <span>Aulas dadas: {student.classes}</span>
      <span>Faltas: {student.absences}</span>
      <span>Valor: {student.value}</span>
    </div>
  ))

  if (loading) {
    return <p>Loading...</p>
  }

  console.log(students)

  return <div className="flex flex-col gap-4 my-4">{list}</div>
}

export { StudentFromDB }
