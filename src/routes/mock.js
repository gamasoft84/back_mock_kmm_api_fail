const { Router } = require('express');
const router = Router();

const { RequestPOVINdata, SubmitCustomerInformation, SubmitCheckinLeadData, SubmitTestDriveFeedback, SubmitPOVINdata, SubmitVehicleDetailData, SubmitStaffData, SubmitInvoiceVINdata, SubmitLeadData } = require('../controllers/mock.controller');

router.route('/RequestPOVINdata')
    .post(RequestPOVINdata);

router.route('/SubmitCustomerInformation')
    .post(SubmitCustomerInformation);

router.route('/SubmitLeadData')
    .post(SubmitLeadData);

router.route('/SubmitCheckinLeadData')
    .post(SubmitCheckinLeadData);

router.route('/SubmitTestDriveFeedback')
    .post(SubmitTestDriveFeedback);

router.route('/SubmitPOVINdata')
    .post(SubmitPOVINdata);

router.route('/SubmitInvoiceVINdata')
    .post(SubmitInvoiceVINdata);

router.route('/SubmitVehicleDetailData')
    .post(SubmitVehicleDetailData);

router.route('/SubmitStaffData')
    .post(SubmitStaffData);



module.exports = router;
