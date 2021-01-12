const stockCtrl = {};

 
stockCtrl.RetrieveVehicleStockCount= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'VEHICLE_STOCK_COUNT_' + new Date().getTime() + '';
        resp.resultCode = 'GCOREFA';

        resp.errorManagement = {
            errorCode: 'ERROR01',
            errorDescription : 'Internal Error Server'
        }

        console.log('RetrieveVehicleStockCount');
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