import { Sequelize } from 'sequelize';


const db = new Sequelize('resumen-lineas', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

export default db