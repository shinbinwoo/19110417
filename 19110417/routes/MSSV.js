const express = require('express');
const MSSVRouter = express.Router();
const MSSVController = require('../controllers/MSSVController')

MSSVRouter.post('/:id', MSSVController.addNewMember);
MSSVRouter.get('/:id', MSSVController.getMember);


module.exports = MSSVRouter;

