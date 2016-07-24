var fs = require('fs'),
    jokes = [];

function processFile(file) {
    return {
        name: file,
        file: 'jokes/' + file
    }
}

function persist() {
    fs.writeFile('jokes.json', JSON.stringify(jokes), {
        encoding: 'utf-8'
    }, function (err) {
        if (err) {
            throw err;
        }
    });
}

function createJokesFromFileSystem() {
    fs.readdir('jokes', function (err, files) {
        if (err) {
            throw err;
        }

        if (files) {
            files.forEach(function (file) {
                jokes.push(processFile(file));
            }, this);
        }

        persist();
    });
}

createJokesFromFileSystem();