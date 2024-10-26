import mongoose from 'mongoose'
import config from './config'

// Connect to MongoDB
const conexionDB = async () => {
  try {
    const db = await mongoose.connect(config.MONGO_DB)
    console.log('Se ha conectado a la base de MongoDB', db.connection.name)
  } catch (error) {
    console.log('Error connecting to MongoDB', error)
  }
}

export default conexionDB
