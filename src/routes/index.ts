import express from 'express';

const router = express.Router();

router.get('/', (parameters: { req: any, res: any, next: any }) => {
    const {res} = parameters;
    res.json('Welcome to DID-Transports-MS');
});

export default module.exports = router;
