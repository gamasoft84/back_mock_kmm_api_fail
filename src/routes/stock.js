const { Router } = require('express');
const router = Router();

const { getColors, getVersionColors, getVersions, retrieveStockCount } = require('../controllers/stock.controller');
router.route('/colors')
    .get(getColors);

router.route('/versions')
    .get(getVersions);

    
router.route('/versioncolors')
    .get(getVersionColors);

router.route('/retrieveStockCount')
    .get(retrieveStockCount);


module.exports = router;
