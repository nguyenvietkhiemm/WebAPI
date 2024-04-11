const mongoose = require('mongoose');

const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const TaskSchema = new Schema(
    {
        _id: { type: Number },
        name: { type: String, required: true, maxLength: 255 },
        // content: { type: String, required: true, maxLength: 255},
        completed: { type: Boolean, default: false},
    },
    {
        _id: false,
        timestamps: true,
    },
);

// custom query helpers - giống add thêm hàm
// TaskSchema.query.sortable = function (req) {
//     if (req.query.hasOwnProperty('_sort')) {
//         return this.sort({
//             [req.query.column]: req.query.type,
//         });
//     }
//     return this;
// };

// add plugins
TaskSchema.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});
TaskSchema.plugin(AutoIncrement, {id: 'TaskID'});

module.exports = mongoose.model('Task', TaskSchema);
