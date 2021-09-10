import express, { Application } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import vipsRoute from './routes/vips.route'
import loginRoute from './routes/login.route'
import { initializeDummyData } from './utilities/initializeDummyData'
import { synchronizeModel } from './utilities/synchronizeModel'
import { requireAuth } from './middleware/auth'
import { db } from './config/database'

const app: Application = express()
app.use(cookieParser())
app.use(cors({ credentials: true, origin: ['http://localhost:3000', 'http://localhost:3050'] }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.authenticate()
  .then(async () => {
    console.log('Database connection has been established successfully.')
    await synchronizeModel()
    await initializeDummyData()
  })
  .catch((err) => console.error('Unable to connect to the database:', err))

app.use('/api/login', loginRoute())
app.use('/api/vips', requireAuth, vipsRoute())

app.listen(5000, () => console.log(`Server running on port 5000`))
