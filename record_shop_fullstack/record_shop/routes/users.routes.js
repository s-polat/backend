import { Router } from 'express';
import { getUsers, addUser, getUserById, deleteUser, loginUser } from '../controller/users.controller.js';

const router = new Router();

// CRUD ?

router.route('/')
    .get(getUsers) // Read
    .post(addUser); // Create



    router.route('/login').post(loginUser);

    router.route('/register').post(addUser);

    // 1. Lesbarkeit / Konsistenz
    // 2. ID nur innerhalb einer Collectoin Einzigartig
router.route('/:id')
    .get(getUserById) // Read
    .delete(deleteUser); // Delete
    //.update(updateUser); // Update

export default router;
