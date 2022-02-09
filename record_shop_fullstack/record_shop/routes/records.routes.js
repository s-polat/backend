import { Router } from 'express';
import { getAllRecords, addRecord } from '../controller/records.controller.js';


const router = new Router();

router.route('/records')
    .get(getAllRecords)
    .post(addRecord);


//
//olabilecek route varyantlari
 
// router.route('/records/:id')
//     .get()
//     .post() // update record
//     .delete();

router.get('/records/top10', (req, res)=> {
    console.log('Not yet implemented');
    res.send('Not yet implemented');
 });

export default router;