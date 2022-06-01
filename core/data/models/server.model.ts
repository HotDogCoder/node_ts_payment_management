import express, {Application} from 'express';
import paymentRoutes from '../../../features/payment/presentation/routes/payment.routes';
import currencyRoutes from '../../../features/configuration/presentation/routes/currency.routes';
import morgan from 'morgan';
import cors from 'cors';
import MysqlDataBase from '../datasources/mysql.database';

class Server {
    private app: Application;
    private port: string;
    private apiPahs = {
        payment: '/api/payment',
        currency: '/api/currency'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        //Build Routes
        this.middlewares();
        this.routes();
        this.mysqlDataBaseConnection();
    }

    routes(){
        this.app.use(this.apiPahs.payment, paymentRoutes);
        this.app.use(this.apiPahs.currency, currencyRoutes);
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') )
    }

    async mysqlDataBaseConnection(){
        try {
            await MysqlDataBase.authenticate();
            console.log('mysql is connected');
        } catch (error:any) {
            console.log('mysql is not conected')
        }
    }

    listen(){
        this.app.use(morgan('dev'));
        this.app.listen(this.port, () => {
            console.log('Server running on port ' + this.port);
        })
    }
}

export default Server; 