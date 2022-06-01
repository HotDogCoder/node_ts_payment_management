import { Sequelize } from "sequelize";

const MysqlDataBase = new Sequelize('DB_PAYMENT', 'root', 'mysql$$123', {
    host: 'localhost',
    dialect: 'mysql'
})

export default MysqlDataBase;