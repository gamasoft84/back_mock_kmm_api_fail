const { Schema, model } = require('mongoose');

const versionSchema = new Schema(
    {
        vhclId: String,
        modlNameHtml: String,
        modlName: String,
        modlCd: String,
        trimNm: String,
        tmName: String,
        tmCd: String,
        desc: String,
        version: String,
        year: String,
        modlCdSap: String
    }, {
        timestamps: true
    });

module.exports = model('Version', versionSchema);