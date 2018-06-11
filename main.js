var request = require("request");
var fs = require("fs");

request
    .get("https://sytantris.github.io/http-examples/future.jpg")
    .on("error", function(err) {
        throw err;
    })
    .on("response", function(response) {
        console.log(
            "The response code is " +
                response.statusCode +
                response.statusMessage +
                " the content type is: " +
                response.headers["content-type"]
        );
        console.log("Downloading Image");
    })
    .pipe(fs.createWriteStream("./future.jpg"))
    .on("finish", function() {
        console.log("Download Complete");
    });
