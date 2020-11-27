

    const moviesUrl = "https://ethereal-generated-marshmallow.glitch.me/movies"

    const getMovies = fetch(`${moviesUrl}`)


    function moviesRequest () {
        getMovies
            .then(res => res.json())
            .then(data => console.log(data))
        .then(data => {
            let html = ''
        })
    }

    console.log(moviesRequest());