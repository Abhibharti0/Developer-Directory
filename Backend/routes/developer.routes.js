import express from 'express';
import { createDeveloper, getDevelopers } from '../controllers/developer.controllers.js';

const router = express.Router();

router.post('/createdevelopers', createDeveloper);
router.get('/getalldevelopers', getDevelopers);


export default router;
