import { createNewStudent } from '../services/CreateNewStudent'
import { Button } from './Button'
import { useRef } from 'react'

type Props = {
  onStudentCreated: () => void
  onMonthChange: (month: number) => void
  selectedMonth: number
}

function Form({ onStudentCreated, onMonthChange, selectedMonth }: Props) {
  const nameInputRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(event.currentTarget)

    const data = {
      name: String(formData.get('student-name')),
      classes: Number(formData.get('classes')),
      absences: Number(formData.get('absences')),
      value: Number(formData.get('select-value')),
      month: selectedMonth,
    }

    await createNewStudent(data)

    form.reset()

    nameInputRef.current?.focus()

    onStudentCreated()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="month">Mês</label>
        <select
          name="month"
          value={selectedMonth}
          onChange={(e) => onMonthChange(Number(e.target.value))}
        >
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <label htmlFor="student-name">Nome: </label>
        <input
          ref={nameInputRef}
          type="text"
          name="student-name"
          placeholder="Nome"
        />

        <label htmlFor="classes">Aulas dadas: </label>
        <input
          type="text"
          name="classes"
          placeholder="Quantidade de aulas dadas"
        />

        <label htmlFor="absences">Faltas: </label>
        <input type="text" name="absences" placeholder="Quantidade de faltas" />

        <label htmlFor="select-value">Valor pago por aula: </label>
        <select name="select-value" id="select-value">
          <option value="31.5">Valor atual: R$ 31,50</option>
          <option value="30.75">Valor antigo: R$ 30,75</option>
          <option value="29.25">Valor com desconto: R$ 29,25</option>
          <option value="52.5">Aula dupla: R$ 52,50</option>
        </select>

        <div className="flex flex-col items-end">
          <Button>
            <span>Adicionar aluno</span>
          </Button>
        </div>
      </form>
    </div>
  )
}

export { Form }
