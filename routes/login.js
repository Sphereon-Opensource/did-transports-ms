const express = require('express');
const transports = require('uport-transports').transport;

const router = express.Router();


router.post('/', function (req, res, next) {
    const {jwt, pushToken, boxPub} = req.body;

    console.log(jwt);
    if (!jwt || !pushToken || !boxPub) {
        next(new Error(`The request is incomplete, \njwt = ${jwt},\npushToken = ${pushToken},
        \nboxPub = ${boxPub}`))
    }
    const pushTransport = transports.push.send(pushToken, boxPub);

    pushTransport(jwt)
        .then(() => res.send())
});

module.exports = router;
