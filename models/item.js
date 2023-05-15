const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    mfd: { type: Date, required: true },
    expiry: { type: Date, required: true },
    price: { type: Number, required: true}
});

module.exports = mongoose.model('Item', itemSchema);
