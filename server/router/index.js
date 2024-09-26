const Router = require('express');
const router = new Router();
const eventController = require('../constroller/eventController');
const userController = require('../constroller/userController');

router.get('/event', eventController.getAll)
//router.get('/event/:link', eventController.getOne)

router.post('/registrationEvents', eventController.create )

//router.delete('/event/:id', eventController.delete)

router.post('/registrationToEvent/:id', userController.registration )

router.get('/user/:id', userController.getUserEvent  )


module.exports = router;