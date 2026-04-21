import { Button } from './Button'

function Form() {
  return (
    <div>
      <form action="post" className="flex flex-col">
        <label htmlFor="student-name">Nome: </label>
        <input type="text" name="student-name" placeholder="Nome" />

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
