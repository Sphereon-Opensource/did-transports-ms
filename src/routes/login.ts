import express from 'express';
import {transport} from 'uport-transports';

const router = express.Router();

router.post('/', (parameters: { body: any, res: any, next: any }) => {
    const {body, res, next} = parameters;
    const {jwt, pushToken, boxPub} = body;
    let pushTransport;

    try {
        pushTransport = transport.push.send(pushToken, boxPub);
        pushTransport(jwt)
            .then(() => res.status(200).json('OK'))
            .catch((err: any) => {
                err.statusCode = 400;
                return next(err)
            })
    } catch (err) {
        err.statusCode = 400;
        return next(err)
    }
});

export default module.exports = router;
