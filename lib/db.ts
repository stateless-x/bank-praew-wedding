import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create a new PrismaClient instance with logging
const prismaClient = new PrismaClient({
  log: ['query', 'error', 'warn'],
})

// Handle connection errors
prismaClient.$connect().catch((error: Error) => {
  console.error('Failed to connect to database:', error)
})

export const prisma = globalForPrisma.prisma ?? prismaClient

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma 