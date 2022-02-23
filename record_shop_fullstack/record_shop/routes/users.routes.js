import { Router } from 'express';
import { getUsers, addUser, getUserById, deleteUser } from '../controller/users.controller.js';

const router = new Router();

// CRUD ?

router.route('/users')
    .get(getUsers) // Read
    .post(addUser); // Create

    // 1. Lesbarkeit / Konsistenz
    // 2. ID nur innerhalb einer Collectoin Einzigartig
router.route('/users/:id')
    .get(getUserById) // Read
    .delete(deleteUser); // Delete
    //.update(updateUser); // Update

export default router;
