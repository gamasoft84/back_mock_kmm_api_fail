const registerInLog = require("../helpers/logHelper");

const stockCtrl = {};

 
stockCtrl.RetrieveVehicleStockCount= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'VEHICLE_STOCK_COUNT_' + new Date().getTime() + '';
        resp.resultCode = 'GCOREFA';

        resp.errorManagement = {
            errorCode: 'ERROR_AW_01',
            errorDescription : 'Internal Error Server'
        }

        console.log('RetrieveVehicleStockCount');
        //log
        registerInLog(resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};

module.exports = stockCtrl;