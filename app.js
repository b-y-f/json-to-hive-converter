const express = require("express"),
    app = express(),
    multer = require('multer'),
    { exec } = require('child_process');
upload = multer({
    dest: 'uploads/',
    limits: {
        fileSize: 1024 * 1024
    }
})

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/:result", (req, res) => {
    res.setHeader('content-type', 'text/plain');
    res.status(200).send(req.params.result.toString());

})

app.post("/file", upload.single('json-file'), (req, res, next) => {

    exec('java -jar json-hive-schema-1.0-jar-with-dependencies.jar ' + req.file.path,
        function (err, stdout, stderr) {
            const schema = stdout
            res.redirect(`/${schema}`);
        });

});

app.listen(process.env.PORT || 4000, function () {
    console.log('Your node js server is running');
});