import { api } from './api'

type CreateStudentData = {
  name: string
  classes: number
  absences: number
  value: number
  month: number
}

export async function createNewStudent(data: CreateStudentData) {
  await api.post('students', data)
}
