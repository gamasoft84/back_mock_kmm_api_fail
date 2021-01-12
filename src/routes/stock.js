const { Router } = require('express');
const router = Router();

const { getColors, getVersionColors, getVersions, RetrieveVehicleStockCount } = require('../controllers/stock.controller');
router.route('/colors')
    .get(getColors);

router.route('/versions')
    .get(getVersions);

    
router.route('/versioncolors')
    .get(getVersionColors);

router.route('/RetrieveVehicleStockCount')
    .post(RetrieveVehicleStockCount);

module.exports = router;
