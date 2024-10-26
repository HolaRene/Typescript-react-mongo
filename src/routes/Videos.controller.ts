import { RequestHandler } from 'express'
import Video from './Video'

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find()
    res.json(videos)
  } catch (error) {
    console.error(error)
  }
}
export const eliminarVideos: RequestHandler = async (req, res) => {
  try {
    const eliminarVideo = await Video.findByIdAndDelete(req.params.id)
    if (!eliminarVideo) res.status(204).json('No se encontro el video')
    res.json('El video se ha eliminado')
  } catch (error) {
    console.error('El error en:', error)
  }
}

export const obtVideo: RequestHandler = async (req, res) => {
  try {
    const obtVideo = await Video.findById(req.params.id)
    if (!obtVideo) res.status(204).json('No se encontro el video')
    res.json(obtVideo)
  } catch (error) {
    console.error('El error en:', error)
  }
}

export const crearVideos: RequestHandler = async (req, res): Promise<void> => {
  try {
    //buscando un video en la base de datos
    const videoEnc = await Video.findOne({ url: req.body.url })
    if (videoEnc) res.status(204).json({ message: 'El video ya existe' })

    const videos = new Video(req.body)
    const videoSaved = await videos.save()

    res.json(videoSaved)
  } catch (error) {
    console.log(error)
  }
}
export const actualVideos: RequestHandler = async (req, res) => {
  try {
    const videoUpt = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!videoUpt) res.status(204).json('No se encontro el video')
    res.json(videoUpt)
  } catch (error) {
    console.log('Ha ocurrido un error: ', error)
  }
}
