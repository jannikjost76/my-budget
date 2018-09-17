const mongoose = require('mongoose');

const MonthSchema = new mongoose.Schema({
    monthIndex: {
        type: String,
        default: new Date().getMonth()
    },
    year: {
        type: String,
        default: new Date().getFullYear()
    },
    budgets: [{
        name: String,
        value: Number,
        maxValue: Number,
        category: String
    }]
});

module.exports = Month = mongoose.model('month', MonthSchema);