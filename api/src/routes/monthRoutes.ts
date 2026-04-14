import { FastifyInstance } from 'fastify'
import { MonthController } from '../controllers/monthController'

async function monthRoutes(app: FastifyInstance) {
  const controller = new MonthController()

  app.post('/', controller.createMonth)
  app.get('/', controller.listMonth)
}

export { monthRoutes }
