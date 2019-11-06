import express from "express";

const router = express.Router();

/* GET home page. */
router.get('/', (parameters: { req: any, res: any, next: any }) => {
  const {req, res, next} = parameters;
  res.json('Welcome to DID-Transports-MS');
});

export default module.exports = router;
