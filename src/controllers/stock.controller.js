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



stockCtrl.retrieveStockCount= async (req, res) => {
    try {
        const { modlCd, versionCd, year } = req.body;
        let resp ={};
        let filter = {};
        modlCd && (filter = {...filter, 'v.modlCdSap': ( Array.isArray(modlCd) ? { $in : modlCd} : modlCd)} )
        versionCd && (filter = {...filter, 'v.versionCdSap':( Array.isArray(versionCd) ? { $in : versionCd} : versionCd) } )       
        year && (filter = {...filter, 'v.year': ( Array.isArray(year) ? { $in : year} : year) } )
        resp.transactionId = 'UUID';
        resp.messageId = 23;

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
                        "modlCd": "$v.modlCdSap",
                        "versionCd": "$v.versionCdSap",
                        "year": "$v.year",
                        "colorCd": "$vc.colorCd",
                        "stock": "$vc.stock",
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