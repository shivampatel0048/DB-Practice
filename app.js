//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://0.0.0.0:27017/wikiDB", { useNewUrlParser: true });

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articleSchema);

      ///////////////////////////////Requests Targeting All Article///////////////////////////////////////


app.route("/articles")

    .get((req, res) => {
        Article.find().then((err, foundArticles) => {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        });
    })

    .post((req, res) => {

        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });

        newArticle.save().then((err) => {
            if (!err) {
                res.send("Successfully added a new article.");
            } else {
                res.send(err);
            }
        });
    })

    .delete((req, res) => {
        Article.deleteMany().then((err) => {
            if (!err) {
                res.send("Successfully deleted all articles.")
            } else {
                res.send(err);
            }
        });
    });

      ///////////////////////////////Requests Targeting A Specific Article///////////////////////////////////////

app.route("/articles/:articleTitle")

    .get((req, res) => {
        const articleTitle = req.params.articleTitle;
        Article.findOne({ title: articleTitle }).then((foundArticle) => {
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send("No article matching that title was found.");
            }
        });
    })

    .put((req, res) => {
        Article.updateOne({ title: req.params.articleTitle },
            { title: req.body.title, content: req.body.content },
            (err) => {
                if (!err) {
                    res.send("Successfully updated article.");
                }
            }
        );
    })

    .patch((req, res) => {

        Article.updateOne(
            { title: req.params.articleTitle },
            { $set: req.body },
            (err) => {
                if (!err) {
                    res.send("Successfully updated article.");
                } else {
                    res.send(err);
                }
            }
        )
    })

    .delete((req, res) => {

        Article.deleteOne(
            { title: req.params.articleTitle },
            (err) => {
                if (!err) {
                    res.send("Successfully deleted the corresponding article.");
                } else {
                    res.send(err);
                }
            }
        )
    })

app.listen(3000, () => {
    console.log("Server started on port 3000.");
});

                            //////////////////////Completed//////////////////////////////