const { Schema, model } = require('mongoose');

const logSchema = new Schema(
    {
        api: String,
        resultCode: String,
        messageId: String,
        transactionId: String,
        req: String,
        resp: String,
    }, {
        timestamps: true
    });

module.exports = model('Log', logSchema);