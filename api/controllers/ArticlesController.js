/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    myGoAction: function(req, res) {
        console.log('myGoAction');
        res.send('hello world');
    },
    list:function(req, res){
        Articles.find({}).exec(function(err, articles){
            console.log('articles', articles);
            res.send(articles);
        });
    },
    create: function(req, res) {
        if (req.body == undefined) {
            res.send(400, {error: 'Title and Description is required'});
        }
        else {
            var title = req.body.title;
            var description = req.body.description;
            if (title == undefined || description == undefined) {
                res.send(400, {error: 'Title and Description is required'});
            } else {
                Articles.create({title: title, description: description}).exec(function (err) {
                    if (err) {
                        res.send(500, {error: 'Database Error'});
                    } else {
                        res.send(201);
                    }
                });
            }
        }
    }

};
