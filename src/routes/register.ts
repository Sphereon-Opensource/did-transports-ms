import express from 'express';
import {Credentials} from 'uport-credentials';
import {transport, message} from 'uport-transports';

const router = express.Router();

// setup Credentials object with newly created application identity.
const credentials = new Credentials({
    did: 'did:ethr:0x88ed694ffe9244e2993d2932638a5c736371fc04',
    privateKey: '2106b0925c0b7486d3474ea0521f0a8750992902c7a13f02498e4066da3cf0f0'
});

router.post('/', async (parameters: { body: any, res: any, next: any }) => {
    const {body, res, next} = parameters;
    const {jwt} = body;

    try {
        const uri = await message.util.paramsToQueryString(message.util.messageToURI(jwt), {callback_type: 'post'});
        const imageDataUri = await transport.ui.getImageDataURI(uri);
        res.status(200, {'Content-Type': 'text/plain'})
            .send(imageDataUri);
    } catch (err) {
        err.statusCode = 400;
        return next(err)
    }
});

export default module.exports = router;
