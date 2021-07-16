import { Sequelize } from 'sequelize'
import {
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_USERNAME,
} from './constants'

export const db = new Sequelize(
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
  }
)
