const fs = require('fs');

const header = () => {

    let fixed = `<!DOCTYPE html>
<html lang="en">
<!-- template for the main page -->
<head>
    <meta charset="UTF-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Home</title>
</head>

<body>

    <div class="container">
        <div class="jumbotron">
            <center>
                <h1>30s of Java 8</h1>
                <p>Short Java 8 code snippets for all your development needs </p>
            </center>

        </div>
        <!-- <p>This is some text.</p> -->
        <!-- <p>This is another text.</p> -->
    </div>
    <div class="container">
        <div class="card-columns">
`;

    fs.writeFile('index.html', fixed, function (err) {
        if (err) throw err;
        console.log('header added')
    });

}


module.exports = header;