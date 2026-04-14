import { FastifyInstance } from 'fastify'
import { studentsController } from '../controllers/studentsController'

async function studentsRoutes(app: FastifyInstance) {
  const controller = new studentsController()

  app.post('/', controller.createStudent)
  app.get('/', controller.listStudent)
}

export { studentsRoutes }
