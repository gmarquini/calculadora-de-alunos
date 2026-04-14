class studentsController {
  async createStudent(req: any, reply: any) {
    return { message: 'Estudante criado' }
  }

  async listStudent(req: any, reply: any) {
    return { message: 'Estudantes listados' }
  }
}

export { studentsController }
