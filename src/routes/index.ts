import express from "express";

const router = express.Router();

/* GET home page. */
router.get('/', (parameters: { req: any, res: any, next: any }) => {
  const {req, res, next} = parameters;
  res.render('index', { title: 'Express' });
});

export default module.exports = router;
