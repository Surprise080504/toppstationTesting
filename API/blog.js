const express = require('express')
const router = express.Router()
const Blogs = require('../models/Blogs')
const Users = require('../models/Users')
const secret = "3asba";

router.get('/blogs', (req, res) => {
    Blogs.find()
        .then(blogs => {
            if (!blogs) {
                return res.status(400).json({ msg: 'No Blogs found' })
            } else {
                res.send(blogs)
            }
        })
        .catch(err => res.json({ msg: 'Server error' }))
});

router.get('/blogs/:id', (req, res) => {
    Blogs.find({_id: req.params.id})
        .then(blog => {
            if (!blog) {
                return res.status(400).json({ msg: 'No Blogs found' })
            } else {
                Users.findOne({ _id: blog[0].creatorId })
                    .then(user => {
                        let blogHolder = blog[0];
                        let userData = {
                            name: user.name,
                            image: user.image,
                            description: user.description,
                            job: user.job,
                        }
                        blogHolder.user = userData;
                        res.send([blogHolder])
                    })
            }
        })
        .catch(err => res.json({ msg: 'Server error' }))
});

module.exports = router