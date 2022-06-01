import { DataTypes } from "sequelize/types";

import MysqlDataBase from '../../../../core/data/datasources/mysql.database';

const Payment = MysqlDataBase.define(
    'payment',
    {
        description: {
            type: DataTypes.STRING
        },
        short_description: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.INTEGER
        }
    }
)

export default Payment;