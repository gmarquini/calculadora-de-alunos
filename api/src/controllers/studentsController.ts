import { prisma } from '../database/prisma'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { FastifyRequest, FastifyReply } from 'fastify'

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
      month: z.number(),
    })

    const { name, classes, absences, value, month } = bodySchema.parse(req.body)

    // Adicionando os dados
    const student = {
      id: randomUUID(),
      name: name,
      classes: classes,
      absences: absences,
      value: value,
      month: month,
    }

    await prisma.students.create({ data: student })

    return reply.status(201).send({ student })
  }

  async index(req: FastifyRequest, reply: FastifyReply) {
    const querySchema = z.object({
      month: z.coerce.number().min(1).max(12).optional(),
    })

    const { month } = querySchema.parse(req.query)

    const where = month !== undefined ? { month } : {}

    const students = await prisma.students.findMany({
      where,
      select: {
        id: true,
        name: true,
        classes: true,
        absences: true,
        value: true,
        month: true,
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
