import express, { Application } from 'express';
import newsRoutes from '../routes/news';
import cors from 'cors';

export default class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        everythig: '/api/everything'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middlewares();

        // Define our routes
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Body read
        this.app.use(express.json());

        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.apiPaths.everythig, newsRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server working on port ${this.port}`);
        })
    }

}