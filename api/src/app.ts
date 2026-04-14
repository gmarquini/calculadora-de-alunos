import fastify from 'fastify'
import { routes } from './routes/index'

export function createApp() {
  const app = fastify()

  // registrar rotas
  app.register(routes)

  return app
}
