const {
  getTodos,
  deleteTodoById,
  updateTodo,
  createTodo
} = require('../controllers/todoController')
const withAuth = require('../middlewares/authMiddleware')
const router = require('express').Router()

router.route('/')
  .get(withAuth, async (req, res) => {
    try {
      const todos = await getTodos(req.userId)
      return res.json(todos)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

  .post(withAuth, async (req, res) => {
    try {
      await createTodo(req.body, req.userId)
      const todos = await getTodos(req.userId)
      return res.json(todos)
    } catch (error) {
      return res.status(500).send(error)
    }
  })

  .delete(withAuth, async (req, res) => {
    try {
      await deleteTodoById(req.body.id)
      const todos = await getTodos(req.userId)
      return res.json(todos)
    } catch (error) {
      return res.status(500).send(error)
    }
  })

  .put(withAuth, async (req, res) => {
    try {
      await updateTodo(req.body)
      const todos = await getTodos(req.userId)
      return res.json(todos)
    } catch (error) {
      return res.status(500).send(error)
    }
  })

module.exports = router
