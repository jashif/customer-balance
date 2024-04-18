const express = require('express');
const controller = require('../controllers/balance-controller');
const { asyncErrorMiddleware } = require('../middlewares/async-middleware');

const router = express.Router();
//GET
router.get('/all', asyncErrorMiddleware(controller.getAll));
router.get(
  '/:retailUnitCode/:customerId/:activity/:period',
  asyncErrorMiddleware(controller.getBalancesByPeriod)
);

router.get('/:retailUnitCode/:period', asyncErrorMiddleware(controller.getAll));

router.post('/:retailUnitCode/:customerId', asyncErrorMiddleware(controller.addBalanceEvent));

module.exports = router;
