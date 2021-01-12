const { Schema, model } = require('mongoose');

const versionColorsSchema = new Schema(
    {
        vhclId: String,
        colorCd: String,
        stock: Number,
        isPrimary: Boolean,
    }, {
        timestamps: true
    });

module.exports = model('VersionColors', versionColorsSchema);