console.log('Starting Sever', new Date().toDateString())
import { connectToDatabase } from './db/index.js'

const db = await connectToDatabase()
