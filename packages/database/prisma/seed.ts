import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Add initial seed records here when seed data is defined.
  console.log('Database seed completed (no-op).')
}

main()
  .catch((error) => {
    console.error('Database seed failed', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
