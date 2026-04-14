import { FastifyInstance } from 'fastify'

import { studentsRoutes } from './studentsRoutes'
import { monthRoutes } from './monthRoutes'

async function routes(app: FastifyInstance) {
  app.register(studentsRoutes, {
    prefix: '/students',
  })

  app.register(monthRoutes, {
    prefix: '/month',
  })
}

export { routes }
