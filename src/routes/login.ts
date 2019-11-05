import express from "express";
import {transport as transports} from "uport-transports";

const router = express.Router();

router.post('/', (parameters: { body: any, res: any, next: any }) => {
    const {body, res, next} = parameters;
    const {jwt, pushToken, boxPub} = body;
    if (!jwt || !pushToken || !boxPub) {
        const err: any = new Error(`The request is incomplete, \njwt = ${jwt},\npushToken = ${pushToken},
        \nboxPub = ${boxPub}`);
        err.statusCode = 400;
        return next(err);
    }
    const pushTransport = transports.push.send(pushToken, boxPub);
    console.log('test');
    res.json([{},{}]);
    // pushTransport(jwt)
    //     .then(() => res.send('OK'))
    //     .catch((err: any) => {
    //         err.statusCode = 400;
    //         next(err)
    //     })
});

export default module.exports = router;
