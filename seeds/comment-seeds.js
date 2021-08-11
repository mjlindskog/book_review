const { Comment } = require('../model');

const fakeComments = [
    {
        "comment_content":"Thanks for the heads up!",
        "user_id":1,
        "post_id":2
    },
    {
        "comment_content":"I'll have to give that a read",
        "user_id":2,
        "post_id":3
    },
    {
        "comment_content":"Couldn't agree more!",
        "user_id":2,
        "post_id":1
    }
];

const seedComments = () => Comment.bulkCreate(fakeComments);

module.exports = seedComments;