(function (pegasus, Howl, setTimeout) {
    var jokes, audio, shakeTimeout;

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
        if (audio) {
            return;
        }

        // If the user has clicked the button we remove the alert class. No need to highlight the button anymore.
        jokeButton.classList.remove('alert');

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

})(pegasus, Howl, setTimeout);