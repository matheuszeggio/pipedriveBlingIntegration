import mongoose from 'mongoose'

class DB {
  constructor () {
    this.connection()
  }

    connection() {
    this.connection = mongoose.connect(process.env.MONGO_URL)
  }
}
export default new DB()