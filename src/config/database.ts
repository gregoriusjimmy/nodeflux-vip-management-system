import { Sequelize } from 'sequelize'

const databaseName = 'vip_management_system'
const databaseUsername = 'postgres'
const databasePassword = 'admin'

export const db = new Sequelize(
  databaseName,
  databaseUsername,
  databasePassword,
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
