const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    examples: {
        type: [{ type: String }, ],
        required: false
    },
    constraints: {
        type: String,
        required: true
    },
    expectedOutput: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true,
        default: "Easy"
    },
    category: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('question', questionSchema);