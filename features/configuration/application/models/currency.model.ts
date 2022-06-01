import { DataTypes } from "sequelize";

import MysqlDataBase from '../../../../core/data/datasources/mysql.database';

const Currency = MysqlDataBase.define(
    'currencies',
    {
        description: {
            type: DataTypes.STRING
        },
        shortDescription: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.INTEGER
        }
    }
)

export default Currency;