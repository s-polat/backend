const express = require('express');
const {userLogin, getUserById, createUser, userUpdate, deleteUser} = require('../controllers/user.controller.js');
const router = express.Router();


router.route('/user')
    .post(createUser);

router.route('/user/login')
    .post(userLogin);

router.route('/user/:id')
    .get(getUserById)
    .delete(deleteUser)
    .put(userUpdate);



module.exports = router;