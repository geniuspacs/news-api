import dotenv from 'dotenv';
import Server from './models/server';

// Read dotenv configuration (.env file)
dotenv.config();

const server = new Server();

server.listen();