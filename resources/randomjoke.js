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
    var cat = document.querySelector(".cat");

    cat.addEventListener('animationend', function (event) {
        cat.classList.remove('laughing');
    });

    //Play a random joke on click
    jokeButton.addEventListener('click', function (event) {
        var joke = getRandomJoke();

        cat.classList.add('shaking');

        audio = new Howl({
            src: [joke.file]
        });

        audio.on('end', function () {
            audio.unload();
            audio = null;

            cat.classList.remove('shaking');
            cat.classList.add('laughing');
        });

        audio.play();
    });

})(pegasus, Howl);