import { prisma } from '../database/prisma'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { FastifyRequest, FastifyReply } from 'fastify'
import { disconnect } from 'node:cluster'

class studentsController {
  async create(req: FastifyRequest, reply: FastifyReply) {
    // Validação da req.
    const bodySchema = z.object({
      name: z
        .string()
        .min(3, { message: 'O nome precisa ter ao menos 3 caracteres.' }),
      classes: z.number(),
      absences: z.number(),
      value: z.number(),
    })

    const { name, classes, absences, value } = bodySchema.parse(req.body)

    // Adicionando os dados
    const student = {
      id: randomUUID(),
      name: name,
      classes: classes,
      absences: absences,
      value: value,
    }

    await prisma.students.create({ data: student })

    return reply.status(201).send({ student })
  }

  async index(req: FastifyRequest, reply: FastifyReply) {
    const students = await prisma.students.findMany({
      select: {
        id: true,
        name: true,
        classes: true,
        absences: true,
        value: true,
      },
    })

    return { students }
  }

  async remove(req: FastifyRequest, reply: FastifyReply) {
    const paramsSchema = z.object({
      id: z.uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    await prisma.students.delete({ where: { id } })

    return reply.status(204).send()
  }
}

export { studentsController }
