import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import morgan from 'morgan';
import path from 'path';
import jsxRender from './utils/jsxRender';
// import indexRouter from './routes/indexRouter';
// import postsRouter from './routes/postsRouter';
import { indexRouter, postsRouter } from './routes';

const app = express();
const PORT = 3000;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use('/', indexRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
