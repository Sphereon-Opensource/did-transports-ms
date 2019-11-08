import express from 'express';
import {transport } from 'uport-transports';

const router = express.Router();

router.post('/', (parameters: { body: any, res: any, next: any }) => {
    const {body, res, next} = parameters;
    const {jwt, pushToken, boxPub} = body;
    if (!jwt || !pushToken || !boxPub) {
        const err: any = new Error(`The request is incomplete`);
        err.statusCode = 400;
        return next(err);
    }
    const pushTransport = transport.push.send(pushToken, boxPub);

    pushTransport(jwt)
        .then(() => res.status(200).json('OK'))
        .catch((err: any) => {
            err.statusCode = 400;
            return next(err)
        })
});

export default module.exports = router;
