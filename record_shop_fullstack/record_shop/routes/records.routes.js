import { Router } from 'express';
import { getRecords, addRecord, getRecordById, deleteRecord } from '../controller/records.controller.js';
import { permission } from '../middleware/PermissionMiddleware.js';

const router = new Router();
router.use(permission())

router.route('/')
    .get(getRecords)
    .post(addRecord);

router.route('/:id')
    .get(getRecordById)
    .delete(deleteRecord);


export default router;