
const Log = require('../models/Log');

const registerInLog = async(api,messageId, transactionId, body, resp, resultCode) => {
   const logBD = new Log();
    logBD.api = api;
    logBD.messageId = messageId;
    logBD.transactionId = transactionId;
    logBD.req = JSON.stringify(body);
    logBD.resp = JSON.stringify(resp);
    logBD.resultCode = resultCode;
    try {
        await logBD.save();
    } catch (error) {
        console.log('Error al guardar en bitacora');
    }
    return null;
}

module.exports = registerInLog;
