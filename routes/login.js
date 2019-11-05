const express = require('express');
const transports = require('uport-transports').transport;

const router = express.Router();


router.post('/', function (req, res, next) {
    const {jwt, pushToken, boxPub} = req.body;

    if (!jwt || !pushToken || !boxPub) {
        let err = new Error(`The request is incomplete, \njwt = ${jwt},\npushToken = ${pushToken},
        \nboxPub = ${boxPub}`);
        err.statusCode = 400;
        next(err);
    }
    const pushTransport = transports.push.send(pushToken, boxPub);

    pushTransport(jwt)
        .then(() => res.send('OK'))
});

module.exports = router;
