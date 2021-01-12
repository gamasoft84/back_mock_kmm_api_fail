const mockCtrl = {};

mockCtrl.RequestPOVINdata= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'REQUEST_PO_VIN_DATA_' + new Date().getTime() + '';
        resp.resultCode = 'GCOREFA';

        resp.errorManagement = {
            errorCode: '',
            errorDescription : ''
        }

        console.log('RequestPOVINdata');
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
            errorCode: '',
            errorDescription : ''
        }

        console.log('SubmitCustomerInformation');
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