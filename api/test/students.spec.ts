import { app } from '../src/app'
import request from 'supertest'
import { test, beforeAll, afterAll, describe } from 'vitest'

// categoria de testes.
describe('Students routes', () => {
  // beforeAll() roda uma função antes de todos os testes uma única vez. Para rodar uma vez antes de cada teste,
  // use beforeEach(). afterAll() e afterEach() para rodar depois.
  beforeAll(async () => {
    await app.ready() // espera a aplicação estar pronta.
  })

  afterAll(async () => {
    await app.close() //para fechar a aplicação
  })

  test('User can create a new student', async () => {
    await request(app.server)
      .post('/students')
      .send({
        name: 'Gabriel',
        classes: 4,
        absences: 0,
        value: 31.5,
      })
      .expect(201)
  })
})
