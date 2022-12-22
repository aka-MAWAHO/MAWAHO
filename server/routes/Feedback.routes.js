const express =require('express'); 
const {saveFeedback,get} = require('../controller/Feedback')
const router = express.Router();
router.post('/addfeed', saveFeedback);
router.get('/getfeed', get);


module.exports = router;
