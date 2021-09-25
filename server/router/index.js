const Router = require('express').Router;
const userController = require('../controllers/userController');
const { body } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');

// @ts-ignore
const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

module.exports = router;
