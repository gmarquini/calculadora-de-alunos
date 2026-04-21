import { Button } from './Button'

function CalcStudentList() {
  return (
    <div className="flex flex-col bg-blue-100 mt-8 rounded-md p-10 w-120">
      <h4>Lista de alunos:</h4>
      <div></div>
      <Button>Somar resultado</Button>
    </div>
  )
}

export { CalcStudentList }
