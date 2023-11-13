const { Schema, model } = require('mongoose')

const coachSchema = new Schema(
    {
        id: {
            type: Number,
            unique: true
        },
        firstname: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        nationality: {
            type: String,
            required: true
        },
        height: {
            type: String,
            required: true
        },
        weight: {
            type: String,
            required: true
        },
        photo: {
            type: String
        }

    },
    {
        timestamps: true
    }
);


module.exports = model('Coach', coachSchema)