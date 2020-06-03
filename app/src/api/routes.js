const express = require('express')
const multer = require('multer')

// normal router
const router = express.Router()

// content-type: multipart/form-data 対応
const upload = multer({ dest: 'uploads/' })

// Controllers
const authController = require('./controllers/auth')
const userController = require('./controllers/user')
const importController = require('./controllers/import')

// auth
router.post('/auth/login', authController.login)
router.post('/auth/logout', authController.logout)

// user
router.get('/user', userController.getByToken)
router.get('/userlist', userController.getAll)
router
  .route('/user/:username')
  .get(userController.getByUsername)
  .post(userController.create)
  .put(userController.update)
  .delete(userController.delete)

// import
router.use('/import', upload.single('file'))
router.post('/import/:type', importController.execute)

module.exports = router
