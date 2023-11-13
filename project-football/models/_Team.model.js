const { Schema, model } = require('mongoose')

const teamSchema = new Schema(
    {
        id: {
            type: Number,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        founded: {
            type: Number,
            required: true
        },
        national: {
            type: Boolean,
            required: true
        },
        logo: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    }
);


module.exports = model('Team', teamSchema)