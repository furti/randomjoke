(function (pegasus, Howl) {
    var jokes, audio;

    function getRandomJoke() {
        var nextJoke = Math.round(Math.random() * (jokes.length - 1));

        return jokes[nextJoke];
    }

    pegasus('jokes.json').then(function (data) {
        jokes = data;
    });

    var jokeButton = document.querySelector(".joke-button");

    //Play a random joke on click
    jokeButton.addEventListener('click', function (event) {
        var joke = getRandomJoke();

        audio = new Howl({
            src: [joke.file]
        });

        audio.on('end', function () {
            audio.unload();
            audio = null;
        });

        audio.play();
    });

})(pegasus, Howl);