import dotenv from 'dotenv';
import Server from './core/data/models/server.model';

dotenv.config();

const server = new Server();

server.listen();