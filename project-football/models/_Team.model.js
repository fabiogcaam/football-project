const { Schema, model } = require('mongoose')

const teamSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        },
        isFavourite: [{
            type: String
        }]
    },
    {
        timestamps: true
    }
);


module.exports = model('Team', teamSchema)