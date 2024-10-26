import env from 'dotenv'

env.config()

// console.log(process.env.HOLA)

export default {
  MONGO_DB: process.env.MONGODB ?? 'joe',
  PORT: process.env.PORT ?? 3000,
}
