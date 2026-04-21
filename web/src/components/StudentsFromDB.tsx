function StudentFromDB() {
  const students = [
    {
      name: 'Gabriel Valera Marquini',
      classes: 4,
      absences: 0,
      value: 31.5,
    },
    {
      name: 'Maria Júlia dos Santos',
      classes: 3,
      absences: 1,
      value: 29,
    },
    {
      name: 'Maria Júlia dos Santos',
      classes: 3,
      absences: 1,
      value: 29,
    },
    {
      name: 'Maria Júlia dos Santos',
      classes: 3,
      absences: 1,
      value: 29,
    },
    {
      name: 'Maria Júlia dos Santos',
      classes: 3,
      absences: 1,
      value: 29,
    },
    {
      name: 'Maria Júlia dos Santos',
      classes: 3,
      absences: 1,
      value: 29,
    },
    {
      name: 'Maria Júlia dos Santos',
      classes: 3,
      absences: 1,
      value: 29,
    },
    {
      name: 'Maria Júlia dos Santos',
      classes: 3,
      absences: 1,
      value: 29,
    },
  ]

  const list = students.map((student) => (
    <div className="flex flex-col bg-blue-500 text-white w-80 h-min p-3 rounded-md scroll-auto">
      <h3>Nome: {student.name}</h3>
      <span>Aulas dadas: {student.classes}</span>
      <span>Faltas: {student.absences}</span>
      <span>Valor: {student.value}</span>
    </div>
  ))

  return <div className="flex flex-col gap-4">{list}</div>
}

export { StudentFromDB }
