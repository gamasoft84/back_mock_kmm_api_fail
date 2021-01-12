const { Router } = require('express');
const router = Router();

const { RetrieveVehicleStockCount } = require('../controllers/stock.controller');

router.route('/RetrieveVehicleStockCount')
    .post(RetrieveVehicleStockCount);

module.exports = router;
