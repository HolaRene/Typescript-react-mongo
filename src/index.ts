import app from './app'
import conexionDB from './database'

conexionDB()
app.listen(app.get('puerto'), () => {
  console.log(`Server is running on port ${app.get('puerto')}`)
})
