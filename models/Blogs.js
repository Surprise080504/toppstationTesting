const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    creator: { type: String, required: true },
    creatorId: { type: String, required: false },
    user: { type: Object, required: false },
    cta: { type: String, required: false },
    ctaText: { type: String, required: false },
    creationDate: {type: String, required: true},
    tags: [
        {type: String}
    ],
});

module.exports = mongoose.model('blogs', blogSchema)