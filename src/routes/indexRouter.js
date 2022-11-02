import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('Layout');
});

router.get('/fetch', async (req, res) => {
  res.render('Layout');
});

router.get('/state', async (req, res) => {
  res.render('Layout');
});

router.get('/group', async (req, res) => {
  res.render('Layout');
});

router.post('/joke', async (req, res) => {
  console.log('JOKE:', req.body);
  res.sendStatus(200);
});

export default router;
