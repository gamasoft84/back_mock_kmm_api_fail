const { Schema, model } = require('mongoose');

const colorSchema = new Schema(
    {
        extColorCode: String,
        name: String,
        cdDesc: String,
    }, {
        timestamps: true
    });

module.exports = model('Color', colorSchema);