import { FastifyInstance } from 'fastify'
import { studentsController } from '../controllers/studentsController'

async function studentsRoutes(app: FastifyInstance) {
  const controller = new studentsController()

  app.post('/', controller.create)
  app.get('/', controller.index)
  app.delete('/:id', controller.remove)
}

export { studentsRoutes }
