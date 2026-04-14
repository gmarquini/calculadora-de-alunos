class MonthController {
  async createMonth(req: any, reply: any) {
    return { message: 'Mes criado' }
  }

  async listMonth(req: any, reply: any) {
    return { message: 'Meses listados' }
  }
}

export { MonthController }
