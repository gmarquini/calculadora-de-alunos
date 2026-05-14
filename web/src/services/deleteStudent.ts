import { api } from './api'

export async function deleteStudent(id: string) {
  await api.delete(`/students/${id}`)
}
