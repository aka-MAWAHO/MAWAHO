const Feed = require('../models/Feedback.js')


const saveFeedback = async (req, res) => {
    const newFeed = new Feed({

        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
        message: req.body.message

    });
    try {newFeed.save().then((result) => {
            res.status(201).json(result);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const get = async (req, res) => {
    const allFeed = await Feed.find({})
    try {
        res.status(200).send(allFeed)

    } catch (error) {
        res.status(401).send(error)
    }
}

module.exports = { saveFeedback, get }