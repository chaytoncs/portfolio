import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { corsOptions } from './config/middleware/cors.config'

const app = express()

// Middleware
app.use(cors(corsOptions))
app.use(helmet(helmetOptions))

app.get('/', (req, res) => {
  res.send('Server is running')
})

export default app
