import express from 'express';
import { 
    createTutorial, 
    deleteTutorial, 
    getTutorial,
    getTutorials,
    updateTutorial,
} from '../controllers/tutorial.controller';
import password from '../utils/password';

//remember to add passwords

const router = express.Router();

router.post('/create', createTutorial)

router.get('/get', getTutorial);

router.get('/get-list', getTutorials);

router.put('/update', updateTutorial);

router.delete('/delete', deleteTutorial);

export default router;