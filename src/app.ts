import express from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes';
import loginRouter from './routes/login';

const app = express();

// this middleware will be executed for every request to the app
app.use((req, res, next) => {
    res.header("Content-Type", 'application/json');
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json({type: '*/*'}));

app.use('/', indexRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use((parameters: { req: any, res: any, next: any }) => {
    const {req, res, next} = parameters;
    next(createError(404));
});

// error handler
app.use((err: any, req: any, res: any, next: any) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    console.log('hier');
    res.status(err.statusCode || 500).json(err.message);
});


app.get('/test', (req, res) => {
    res.send([]);
});

module.exports = app;
