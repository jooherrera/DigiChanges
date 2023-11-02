import mongoose from 'mongoose'

export const mongoConf = (uri: string) => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log('Conectado a MongoDB')
    })
    .catch((error) => {
      console.error('Error al conectar', error)
    })
}
