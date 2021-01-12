const stockCtrl = {};

const Color = require('../models/Color');
const VersionColor = require('../models/VersionColor');
const Version = require('../models/Version');

stockCtrl.getColors= async (req, res) => {
    try {
        const colors = await Color.find();
        res.json(colors);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

stockCtrl.getVersionColors= async (req, res) => {
    try {
        const { modlCd } = req.body;
        console.log('modlCd',modlCd);

        const colors = await VersionColor.find();
        res.json(colors);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

stockCtrl.getVersions= async (req, res) => {
    try {
        const { modlCd, versionCd, year } = req.body;
        let filter = {};
        modlCd && (filter = {...filter, modlCdSap: modlCd } )
        versionCd && (filter = {...filter, versionCdSap:versionCd } )
        year && (filter = {...filter, year} )
        
        console.log('Filter:', filter);

        const versions = await Version.find(filter);
        res.json(versions);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};



stockCtrl.RetrieveVehicleStockCount= async (req, res) => {
    try {
        const { modelCode, versionCode, modelYear, messageId, transactionId } = req.body;
        let resp ={};
        let filter = {};
        modelCode && (filter = {...filter, 'v.modlCdSap': ( Array.isArray(modelCode) ? { $in : modelCode} : modelCode)} )
        versionCode && (filter = {...filter, 'v.versionCdSap':( Array.isArray(versionCode) ? { $in : versionCode} : versionCode) } )       
        modelYear && (filter = {...filter, 'v.year': ( Array.isArray(modelYear) ? { $in : modelYear} : modelYear) } )
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'VEHICLE_STOCK_COUNT_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: '',
            errorDescription : ''
        }

        let versions;
        console.log('Filter:', filter);
        versions = await Version.aggregate(
            [
                {
                    "$project": {
                        "_id": 0,
                        "v": "$$ROOT"
                    }
                }, 
                {
                    "$lookup": {
                        "localField": "v.vhclId",
                        "from": "versioncolors",
                        "foreignField": "vhclId",
                        "as": "vc"
                    }
                }, 
                {
                    "$unwind": {
                        "path": "$vc",
                        "preserveNullAndEmptyArrays": false
                    }
                }, 
                {
                    "$match": filter
                }, 
                {
                    "$project": {
                        "modelCode": "$v.modlCdSap",
                        "versionCode": "$v.versionCdSap",
                        "modelYear": "$v.year",
                        "extColorCode": "$vc.colorCd",
                        "stockCount": "$vc.stock",
                        "_id": 0
                    }
                }
            ]
        );    
        resp.resultCode = 'GCORESU';
        resp.data = versions;   
        console.log('Total: ', resp.data.length);
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