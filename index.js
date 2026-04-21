const mainForm = document.getElementById('main-form')
const nameInput = document.querySelector('.name-input')
const classesInput = document.querySelector('.classes-input')
const absencesInput = document.querySelector('.absences-input')
const list = document.getElementById('list')
const listContainer = document.querySelector('.list-container')
const result = document.getElementById('result')
const select = document.getElementById('select-value')

// Valores base para o html
const baseValue = document.querySelector('.basic-value')
const doubleValue = document.querySelector('.double-value')
const oldValue = document.querySelector('.old-value')
const discountValue = document.querySelector('.discount')

baseValue.innerHTML = 31.5
doubleValue.innerHTML = 52.5
oldValue.innerHTML = 30.75
discountValue.innerHTML = 29.25

console.log('script carregado')
let students = []

mainForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let name = nameInput.value
  let classes = classesInput.value
  let absences = absencesInput.value
  let weight = select.value

  if (!name) {
    name = 'Sem nome'
  }

  if (!classes) {
    classes = 0
  }

  if (!absences) {
    absences = 0
  }

  if (!weight) {
    weight = 0
  }

  newStudent(name, classes, absences, weight)

  nameInput.value = ''
  classesInput.value = ''
  absencesInput.value = ''
})

// Dispara quando clica em "somar resultados"
listContainer.addEventListener('submit', (e) => {
  e.preventDefault()
  some()
})

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('erase')) {
    eraseFunction(e)
  }
})

function newStudent(name, classes, absences, weight) {
  const student = {
    name: name,
    classes: classes,
    absences: absences,
    weight: weight,
  }

  students.push(student)
  renderList()
}

function renderList() {
  list.innerHTML = ''

  students.forEach((student) => {
    const studentDiv = document.createElement('div')
    list.append(studentDiv)

    const name = document.createElement('span')
    name.classList.add('student-name')
    name.textContent = student.name
    studentDiv.append(name)

    const classes = document.createElement('span')
    classes.textContent = 'Aulas dadas: ' + student.classes
    studentDiv.append(classes)

    const absences = document.createElement('span')
    absences.textContent = 'Faltas: ' + student.absences
    studentDiv.append(absences)

    const weight = document.createElement('span')
    weight.textContent = 'Valor: ' + student.weight
    studentDiv.append(weight)

    const erase = document.createElement('span')
    erase.textContent = 'apagar'
    erase.classList.add('red-text')
    erase.classList.add('erase')
    nameInput.focus() //voltar o foco para o input de nome
    studentDiv.append(erase)
  })
}

let allValues = []

function some() {
  allValues = []
  students.forEach((student) => {
    const classes = Number(student.classes)
    const absences = Number(student.absences)
    const weight = Number(student.weight)

    const partialResult = (classes + absences) * weight
    allValues.push(partialResult)
    renderSome()
  })
}

function renderSome() {
  result.innerHTML = ''

  const resultValue = allValues.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)

  const resultDiv = document.createElement('div')
  result.append(resultDiv)
  if (resultValue === null) {
    resultValue = 0
  }

  resultDiv.textContent = `R$ ${resultValue.toFixed(2)}`
}

function eraseFunction(e) {
  const studentDiv = e.target.closest('div')
  const index = Array.from(list.children).indexOf(studentDiv)

  students.splice(index, 1)
  renderList()
}
