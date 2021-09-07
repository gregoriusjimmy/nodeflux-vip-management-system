import { Sequelize } from 'sequelize'

export const db = new Sequelize(
  process.env.PG_DATABASE || 'postgres',
  process.env.PG_USER || 'postgres',
  process.env.PG_PASSWORD || '',
  {
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT ? parseInt(process.env.PG_PORT) : 5432,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: process.env.DB_SSL == 'true',
    },
  }
)
