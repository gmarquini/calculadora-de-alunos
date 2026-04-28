import type { Student } from '../types/student'

type Props = {
  students: Student[]
}

function StudentFromDB({ students }: Props) {
  return (
    <div className="flex flex-col gap-4 my-4">
      {students.map((student) => (
        <div
          key={student.id}
          className="flex flex-col bg-blue-500 text-white w-80 p-3 rounded-md"
        >
          <h3>Nome: {student.name}</h3>
          <span>Aulas dadas: {student.classes}</span>
          <span>Faltas: {student.absences}</span>
          <span>Valor: {student.value}</span>
        </div>
      ))}
    </div>
  )
}

export { StudentFromDB }
