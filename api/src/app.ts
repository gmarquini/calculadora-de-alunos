import fastify from 'fastify'
import { routes } from './routes/index'
import { fastifyCookie as cookie } from '@fastify/cookie'

function createApp() {
  const app = fastify()

  app.register(cookie)

  // registrar rotas
  app.register(routes)

  return app
}

const app = createApp()

export { app }
