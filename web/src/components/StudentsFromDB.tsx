import type { Student } from '../types/student'
import closeButton from '../assets/close-button.svg'
import { deleteStudent } from '../services/deleteStudent'

type Props = {
  students: Student[]
  onDeleteStudent: (id: string) => void
}

function StudentFromDB({ students, onDeleteStudent }: Props) {
  return (
    <div className="flex flex-wrap justify-items-start gap-4 my-4">
      {students.map((student) => (
        <div
          key={student.id}
          className="flex bg-blue-500 text-white w-80 h-40 p-3 rounded-md justify-between"
        >
          <div className="flex flex-col">
            <h3>Nome: {student.name}</h3>
            <span>Aulas dadas: {student.classes}</span>
            <span>Faltas: {student.absences}</span>
            <span>Valor: {student.value}</span>
          </div>
          <div>
            <img
              src={closeButton}
              alt="close button"
              className="w-5"
              onClick={async () => {
                await deleteStudent(student.id)
                onDeleteStudent(student.id)
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export { StudentFromDB }
