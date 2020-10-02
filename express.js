const { timeStamp, timeLog } = require("console");
//Requirement
const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

//Server Launch fucntion
function init() {
  app.engine("html", require("express-art-template"));
  app.use("/public/", express.static("./public/"));
  app.get("/", function (request, response) {
    response.render("index.html");
  });
  app.listen(process.env.PORT || 3000, () => console.log("Server started"));
}

var database;
//Connecting Database Section
MongoClient.connect(
  "mongodb+srv://hyp9617:0000@cluster0.70jkq.mongodb.net/<dbname>?retryWrites=true&w=majority",
  function (err, client) {
    database = client.db("searchapp");

    database.collection('post').insertOne(
      {
        Name: "Jaehwan Yoo",
        Paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a orci consectetur, vulputate arcu non, eleifend odio. Sed volutpat purus in sapien viverra, in dignissim libero pretium. Vestibulum aliquet quis quam eget scelerisque. Pellentesque tempus pretium cursus. Aliquam at sagittis lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent justo magna, semper at augue quis, tincidunt porta tortor. Praesent accumsan neque et turpis facilisis dapibus. Morbi consectetur vulputate metus, a mollis tortor commodo in. Mauris velit ligula, interdum vehicula fermentum nec, ornare eget justo. Praesent porttitor, felis id blandit hendrerit, ligula ante vehicula odio, sed tincidunt elit ex non lectus. Fusce cursus, sem ut pulvinar tincidunt, ligula leo sagittis lectus, in tincidunt arcu est vel urna. Donec iaculis facilisis leo a gravida. Pellentesque a ipsum finibus, imperdiet libero eu, luctus odio. Pellentesque egestas quam condimentum sollicitudin volutpat.",
      },
      function (err, result) {
        console.log("complete saving");
      }
    );
    if (err) return console.log("error...");
    init();
    console.log("DB has been connected!");
  }
);
