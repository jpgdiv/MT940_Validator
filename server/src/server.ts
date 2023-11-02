import cors from 'cors';
import express from 'express';
import routes from './routes';

const app = express();

const corsOptions = {
	origin: 'http://localhost:4000',
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

// Start the server
app.listen(3000, () => {
	console.log('Server listening on port 3000');
});

