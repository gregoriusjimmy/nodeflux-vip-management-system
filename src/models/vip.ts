import { Model } from 'sequelize'
import { DataTypes } from 'sequelize'
import { db } from './../config/database'

export class VIP extends Model {
  public id!: number
  public name!: string
  public country_of_origin!: string
  public eta!: Date
  public arrived!: boolean
  public photo!: string
  public attributes?: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

VIP.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country_of_origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eta: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue:
        'https://i.ibb.co/Btk2Lmn/blank-profile-picture-973460-640.png?w=640&h=640',
    },
    attributes: {
      type: DataTypes.JSON,
      set(value) {
        if (typeof value === 'string' || value instanceof String) {
          const array = convertStringToArray(value)
          this.setDataValue('attributes', array)
        } else this.setDataValue('attributes', value)
      },
    },
  },
  { sequelize: db, tableName: 'vips' }
)

const convertStringToArray = (
  stringToConvert: string | String
): Array<string> => {
  const array: Array<string> = []
  const items = stringToConvert.replace(/^['"\[]\[?|"+|'+|\]?['"\]]$/g, '')
  for (const item of items.split(',')) {
    array.push(item)
  }
  return array
}
