//Requirement
const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

//Server Launch fucntion
function init() {
  app.engine("html", require("express-art-template"));
  app.use("/style/", express.static("./style/"));

  app.use(express.static("views"));

  app.get("/", function (request, response) {
    response.render("index.html");
  });
  app.listen(process.env.PORT || 8000, () => console.log("Server started"));
}

var database;
var dburl =
  "mongodb+srv://hyp9617:0000@cluster0.70jkq.mongodb.net/<dbname>?retryWrites=true&w=majority";
//Connecting Database Section
MongoClient.connect(dburl, function (err, client) {
  database = client.db("searchapp");

  // database.collection("post").insertOne(
  //   {
  //     Name: "Jaehwan Yoo",
  //     title : Lorem
  //     Paragraph:
  //       "This text is dummy data",
  //   },
  //   function (err, result) {
  //     console.log("complete saving");
  //   }
  // );

  if (err) return console.log("error...");
  init();
  console.log("DB has been connected!");
});

// btn click event

app.get("/aaa", function (req, res) {
  database
    .collection("post")
    .find()
    .toArray(function (err, result) {
      if (err) {
        return console.log(err);
      }
      res.send(result);
    });
});

app.post("/posted", function (req, res) {
  database.collection("post").insertOne(
    {
      Name: "Steven Yoo",
      title: "Test 1",
      Paragraph: "This text is dummy data",
    },
    res.sendStatus(201),
    function (err, result) {
      console.log("complete saving");
    }
  );
  if (err) return console.log("error...");
});
//------------------------
// app.get("/search", function (req, res) {
//   var keyword = req.body.keyword;
//   database.post
//     .find({ title: "Test 1" })
//     .toArray(function (err, result) {
//       if (err) {
//         return console.log(err);
//       }
//       console.log(res);
//       res.send(result);
//     });
// });

// database.post.find({ Name: "Steven Yoo" }, function (error, data) {
//   console.log(data);
//   res.render("home", { ses: req.session.ide, results: data });
// });

app.post("/search", function(req, res) {
  database.collection("post").find({"$text": {"$search": req.body.keyword}})
})

