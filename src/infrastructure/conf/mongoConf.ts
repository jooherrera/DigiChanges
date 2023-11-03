import mongoose from 'mongoose'

export const mongoConf = (uri: string) => {
  return {
    connect: async () => {
      await mongoose
        .connect(uri)
        .then(() => {
          console.log('Conectado a MongoDB')
        })
        .catch((error) => {
          console.error('Error al conectar', error.message)
        })
    },
    close: async () => {
      await mongoose.disconnect()
    },
  }
}
