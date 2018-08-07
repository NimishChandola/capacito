
import express from 'express';
import path from 'path';
import router from './routes';
import renderer from './helpers/renderer';

const app = express();
//app.use(express.static('public'));
app.use('/assets', express.static(path.join(__dirname, '/public')));

app.get('*', (req, res) => {
	res.send(renderer(req));
});

app.use(router);

export default app;