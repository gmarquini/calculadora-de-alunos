import { app } from './app'
import cors from '@fastify/cors'

const PORT = 3333

async function start() {
  await app.register(cors, {
    origin: 'http://localhost:5173',
    credentials: true,
  })

  app
    .listen({
      port: PORT,
    })
    .then(() => console.log(`Server running on port ${PORT}`))
}

start()
