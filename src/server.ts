import { initializeDummyData } from './utilities/initializeDummyData'
import { synchronizeModel } from './utilities/synchronizeModel'
import express, { Application } from 'express'
import { requireAuth } from './middlewares/auth'
import { db } from './config/database'
import vipsRoute from './routes/vips.route'
const PORT = 3000
const app: Application = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.authenticate()
  .then(async () => {
    console.log('Database connection has been established successfully.')
    await synchronizeModel()
    await initializeDummyData()
  })
  .catch((err) => console.error('Unable to connect to the database:', err))

app.use('/api/vips', requireAuth, vipsRoute())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
