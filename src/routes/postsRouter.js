import express from 'express';
import { Post } from '../../db/models';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const allPosts = await Post.findAll({
      order: [['createdAt', 'DESC']],
    });
    const initState = { allPosts };
    res.render('Layout', initState);
  })
  .post(async (req, res) => {
    await Post.create(req.body);
    res.redirect('/posts');
  });

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const onePost = await Post.findByPk(id);
  const initState = { onePost };
  res.render('Layout', initState);
});

export default router;
