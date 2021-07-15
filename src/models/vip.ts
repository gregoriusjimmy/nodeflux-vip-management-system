import { DataTypes } from 'sequelize'
import { db } from './../config/database'

export const VIP = db.define('vip', {
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
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
})
