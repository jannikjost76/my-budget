const express = require('express');
const router = express.Router();

const Month = require('../../models/Month');

//GET
router.get('/', (req, res) => {
    Month.find()
        .sort({ year: 1, monthIndex: 1 })
        .then(months => res.json(months))
});

router.get('/:yearMonth', (req, res) => {
    var param = req.params.yearMonth;
    var year = param.substring(0, 4);
    var month = param.substring(4, param.length);
    
    Month.find({ year: year, monthIndex: month })
        .sort({ year: 1, monthIndex: 1 })
        .then(months => res.json(months))
});

//POST
router.post('/', (req, res) => {
    const newMonth = new Month({
        monthIndex: req.body.monthIndex,
        year: req.body.year,
        budgets: req.body.budgets
    });

    newMonth.save()
        .then(month => res.json(month));
});

//DELETE
// router.delete('/:id', (req, res) => {
//     Month.findById(req.params.id)
//         .then(month => month.remove().then(() => res.json({ success: true, deletedMonth: month })))
//         .catch(err => res.status(404).json({ success: false, error: err }));
// });

module.exports = router;