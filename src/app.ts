import express from 'express'
import morgan from 'morgan'
import config from './config'
import videosRutas from './routes/Video.routes'
import cors from 'cors'

const app = express()
//Para las conexiones del backedn y fontend
app.use(cors())
//Para conocer las peticiones que llegan
app.use(morgan('tiny'))
//Esrtableciendo un puerto
app.set('puerto', config.PORT)
// Middleware para parsear JSON
app.use(express.json())
// cuando se envie una peeticion POST desde un form se pueda entender los campos que vienen...
app.use(express.urlencoded({ extended: false }))
//usar las rutas de los videos
app.use(videosRutas)

export default app
