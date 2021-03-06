const registerInLog = require("../helpers/logHelper");

const mockCtrl = {};

mockCtrl.RequestPOVINdata= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'REQUEST_PO_VIN_DATA_' + new Date().getTime() + '';
        resp.resultCode = 'GCOREFA';

        resp.errorManagement = {
            errorCode: 'ERROR_AW_01',
            errorDescription : 'Internal Error Server'
        }

        console.log('RequestPOVINdata');
        //log
        registerInLog('RequestPOVINdata',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};


mockCtrl.SubmitCustomerInformation= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'CUSTOMER_INFORMATION_' + new Date().getTime() + '';
        resp.resultCode = 'GCOREFA';

        resp.errorManagement = {
            errorCode: 'ERROR_AW_01',
            errorDescription : 'Internal Error Server'
        }

        console.log('SubmitCustomerInformation');
        //log
        registerInLog('SubmitCustomerInformation',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};

mockCtrl.SubmitLeadData= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'CHECKIN_LEAD_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: 'ERROR_AW_01',
            errorDescription : 'Internal Error Server'
        }

        console.log('SubmitLeadData');
        resp.resultCode = 'GCOREFA';
        //log
        registerInLog('SubmitLeadData',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};


mockCtrl.SubmitCheckinLeadData= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'CHECKIN_LEAD_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: 'ERROR_AW_01',
            errorDescription : 'Internal Error Server'
        }

        console.log('SubmitCheckinLeadData');
        resp.resultCode = 'GCOREFA';
        //log
        registerInLog('SubmitCheckinLeadData',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};

mockCtrl.SubmitTestDriveFeedback= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'TESTDRIVE_FEEDBACK_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: 'ERROR_AW_01',
            errorDescription : 'Internal Error Server'
        }

        console.log('SubmitTestDriveFeedback');
        resp.resultCode = 'GCOREFA';
        //log
        registerInLog('SubmitTestDriveFeedback',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};

mockCtrl.SubmitPOVINdata= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'PO_VIN_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: 'ERROR_AW_01',
            errorDescription : 'Internal Error Server'
        }

        console.log('SubmitPOVINdata');
        resp.resultCode = 'GCOREFA';
        //log
        registerInLog('SubmitPOVINdata',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};

mockCtrl.SubmitInvoiceVINdata= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'INVOICE_VIN_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: 'ERROR_AW_01',
            errorDescription : 'Internal Error Server'
        }

        console.log('SubmitInvoiceVINdata');
        resp.resultCode = 'GCOREFA';
        //log
        registerInLog('SubmitInvoiceVINdata',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};

mockCtrl.SubmitVehicleDetailData= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'VEHICLE_DETAIL_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: 'ERROR_AW_01',
            errorDescription : 'Internal Error Server'
        }

        console.log('SubmitVehicleDetailData');
        resp.resultCode = 'GCOREFA';
        //log
        registerInLog('SubmitVehicleDetailData',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};


mockCtrl.SubmitStaffData= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'STAFF_DATA' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: 'ERROR_AW_01',
            errorDescription : 'Internal Error Server'
        }

        console.log('SubmitStaffData');
        resp.resultCode = 'GCOREFA';
        //log
        registerInLog('SubmitStaffData',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};



module.exports = mockCtrl;