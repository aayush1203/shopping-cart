const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

const db = new Sequelize({
  storage: __dirname + '/items.db',
  dialect: 'sqlite'
})

const item = db.define('item', {
  product: {
    type: DT.STRING,
    
  },
  price: {
    type: DT.INTEGER,
    defaultValue: 0
  },
  quantity: {
    type: DT.INTEGER,
    defaultValue: 0
  },
  pID: {
    type: DT.STRING,
  },
  purl: {
    type: DT.STRING,
  }
})

db.sync()

module.exports = {
  item
}