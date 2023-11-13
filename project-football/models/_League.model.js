const { Schema, model } = require('mongoose')

const leagueSchema = new Schema(
    {
        id: {
            type: Number,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        },
        country: {
            name: {
                type: String,
                required: true
            },
            code: {
                type: String,
                required: true
            },
            flag: {
                type: String,
                required: true
            }
        }
    },
    {
        timestamps: true
    }
);


module.exports = model('League', leagueSchema)