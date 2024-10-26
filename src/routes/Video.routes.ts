import { Router } from 'express'
import {
  getVideos,
  crearVideos,
  eliminarVideos,
  obtVideo,
  actualVideos,
} from './Videos.controller'

const router = Router()

//obtener videos
router.get('/videos', getVideos)
router.get('/videos/:id', obtVideo)
router.delete('/videos/eliminar/:id', eliminarVideos)
router.post('/videos/crear', crearVideos)
router.put('/videos/actualizar/:id', actualVideos)

export default router

//exportandolo
