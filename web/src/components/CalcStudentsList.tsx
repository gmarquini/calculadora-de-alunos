function CalcStudentList({ students }) {
  // falta multiplicar os valores pelas aulas dadas e faltas.
  const amount = students.reduce((acc, student) => {
    return acc + student.value * student.classes * student.absences
  }, 0)

  return (
    <div className="flex flex-col bg-blue-100 mt-8 rounded-md p-10 w-120 items-center justify-center">
      <h2>Resultado</h2>
      <div className="text-4xl">R$ {amount}</div>
    </div>
  )
}

export { CalcStudentList }
